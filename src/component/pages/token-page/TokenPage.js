import { useState } from "react";
import "./token-page.css";
import { useNavigate } from "react-router-dom";

const TokenPage = () => {
  const navigate = useNavigate();

  const showConsole = () => {
    alert("getting token");
  };

  const handleToggle = () => {
    navigate("/questionnaire");
  };
  return (
    <>
      <div className="home">
        <button onClick={showConsole}>Get Token</button>
        <button onClick={handleToggle}>Questionnaire</button>
      </div>
    </>
  );
};

export default TokenPage;
