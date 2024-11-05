import { useState } from "react";
import "./App.css";
import MQLQuestionnaireUI from "./component/maql-questionnaire-uI/MQLQuestionnaireUI";
import { useSelector } from "react-redux";

function App() {
  const [show, setShow] = useState(false);
  const { physicalScore, mentalScore } = useSelector((state) => state.user);

  const showConsole = () => {
    alert("getting token");
  };

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="app">
      {!show && (
        <div className="home">
          <button onClick={showConsole}>Get Token</button>
          <button onClick={handleToggle}>Questionnaire</button>
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
}

export default App;
