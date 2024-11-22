import "./App.css";
import { Route, Routes } from "react-router-dom";
import TokenPage from "./component/pages/token-page/TokenPage";
import OtpPage from "./component/pages/otp-page/OtpPage";
import Questionnaire from "./component/pages/questionnaire-page/Questionnaire";
import ResultPage from "./component/pages/result-page/ResultPage";
import FinalPage from "./component/pages/final-page/FinalPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OtpPage />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </div>
  );
}

export default App;
