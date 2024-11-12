import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import pkceChallenge from "pkce-challenge";
import MQLQuestionnaireUI from "./component/maql-questionnaire-uI/MQLQuestionnaireUI";
import {
  CLINET_ID,
  CLINET_SECRTE,
  CODE_VERIFIER_LOCAL_STORAGE_KEY,
  FHIR_BASE_URL,
  REDIRECT_URL as REDIRECT_URI,
  SMART_AUTH_URL,
  SMART_TOKEN_URL,
  TOKEN_RESPONSE_LOCAL_STORAGE_KEY,
} from "./config";
import { useSelector } from "react-redux";

const App = () => {
  const [show, setShow] = useState(false);
  const { physicalScore, mentalScore } = useSelector((state) => state.user);
  const { tokenResponse, setTokenResponse } = useState({});

  useEffect(() => {
    debugger;
    const code = new URL(window.location.href).searchParams.get("code");
    const codeVerifier = localStorage.getItem(CODE_VERIFIER_LOCAL_STORAGE_KEY);
    const tokenResponseString = localStorage.getItem(
      TOKEN_RESPONSE_LOCAL_STORAGE_KEY
    );
    if (tokenResponseString) {
      const tokenResponseTemp = JSON.parse(tokenResponseString);
      const { issued_at_in_secs } = tokenResponseTemp;
      const expires_in_secs = issued_at_in_secs + tokenResponseTemp.expires_in;
      const now_in_secs = getSecs(new Date());
      if (now_in_secs >= expires_in_secs) {
        localStorage.removeItem(TOKEN_RESPONSE_LOCAL_STORAGE_KEY);
      } else {
        setTokenResponse(tokenResponseTemp);
      }
    }
    if (!tokenResponse) {
      if (code && codeVerifier) {
        makeTokenRequest(code, codeVerifier);
      }
    }
    setShow(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSecs = (date) => {
    return Math.round(date.getTime() / 1000);
  };

  const makeTokenRequest = async (code, codeVerifier) => {
    const data = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier,
    });

    const clientId = CLINET_ID; // Replace with your actual client ID
    const clientSecret = CLINET_SECRTE; // Replace with your actual client secret
    const encodedCredentials = btoa(`${clientId}:${clientSecret}`);

    try {
      const response = await axios.post(SMART_TOKEN_URL, data.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${encodedCredentials}`,
          mode: "no-cors",
        },
      });

      const tokenData = response.data;
      console.log("Access Token:", tokenData.access_token);

      // tokenRequestForm.set('grant_type', 'authorization_code')
      // tokenRequestForm.set('code', code)
      // tokenRequestForm.set('redirect_uri', REDIRECT_URI)
      // tokenRequestForm.set('client_id', CLINET_ID)
      // tokenRequestForm.set('code_verifier', codeVerifier)
      // const tokenGeneratedAt = getSecs(new Date())
      // const response = await axios.postForm(SMART_TOKEN_URL, tokenRequestForm)
      // tokenResponse = response.data
      setTokenResponse(response.data);
      localStorage.setItem(
        TOKEN_RESPONSE_LOCAL_STORAGE_KEY,
        JSON.stringify({ ...tokenResponse })
      );
    } catch (error) {
      console.error("Error exchanging authorization code for token:", error);
    }
  };

  const generateCodeChallenge = async () => {
    const { code_challenge, code_verifier } = await pkceChallenge();
    localStorage.setItem(CODE_VERIFIER_LOCAL_STORAGE_KEY, code_verifier);
    return code_challenge;
  };

  const generateRedirectUrl = (codeChallenge) => {
    const authorizationUrl = new URL(SMART_AUTH_URL);
    authorizationUrl.searchParams.set("client_id", CLINET_ID);
    authorizationUrl.searchParams.set(
      "scope",
      "openid fhirUser user/Patient.read"
    );
    authorizationUrl.searchParams.set("redirect_uri", REDIRECT_URI);
    authorizationUrl.searchParams.set("response_type", "code");
    authorizationUrl.searchParams.set("state", "1234567");
    authorizationUrl.searchParams.set("aud", FHIR_BASE_URL);
    authorizationUrl.searchParams.set("code_challenge", codeChallenge);
    authorizationUrl.searchParams.set("code_challenge_method", "S256");
    debugger;
    return authorizationUrl.href;
  };

  const initiateAuthorizationRequest = async () => {
    const codeChallenge = await generateCodeChallenge();
    const redirectUrl = generateRedirectUrl(codeChallenge);
    window.location.href = redirectUrl;
  };

  return (
    <div className="app">
      {!show && (
        <div className="home">
          <button onClick={initiateAuthorizationRequest}>Get Token</button>
          {/* <button onClick={handleToggle}>Questionnaire</button> */}
        </div>
      )}
      {show && (
        <>
          <h1>
            MQL score: <span>{Math.ceil(physicalScore + mentalScore)}</span>
          </h1>
          <MQLQuestionnaireUI compoName={"Physical Capacity"} />
          <MQLQuestionnaireUI compoName={"Mental Capacity"} />
        </>
      )}
    </div>
  );
};

export default App;
