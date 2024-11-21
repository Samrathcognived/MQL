import "./App.css";
import { Route, Routes } from "react-router-dom";
import TokenPage from "./component/pages/token-page/TokenPage";
import OtpPage from "./component/pages/otp-page/OtpPage";
import Questionnaire from "./component/pages/questionnaire-page/Questionnaire";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OtpPage />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </div>
  );
}

export default App;
