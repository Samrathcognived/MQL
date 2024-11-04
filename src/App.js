import "./App.css";
import MQLQuestionnaireUI from "./component/maql-questionnaire-uI/MQLQuestionnaireUI";

function App() {
  return (
    <div>
      <MQLQuestionnaireUI compoName={"Physical Capacity"} />
      <MQLQuestionnaireUI compoName={"Mental Capacity"} />
    </div>
  );
}

export default App;
