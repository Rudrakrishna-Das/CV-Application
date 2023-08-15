import EducationalInfo from "./Components/Layout/Educational Experience/EducationalInfo";
import GeneralInfo from "./Components/Layout/General Information/GeneralInfo";
import WorkInfo from "./Components/Layout/Practical/WorkExperience";
import Card from "./Components/UI/Card";

function App() {
  return (
    <Card>
      <h1 style={{ textAlign: "center", marginBottom: "2%" }}>Resume</h1>
      <GeneralInfo />
      <br />
      <br />
      <EducationalInfo />
      <br />
      <br />
      <WorkInfo />
    </Card>
  );
}

export default App;
