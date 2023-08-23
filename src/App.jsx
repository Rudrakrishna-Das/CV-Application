import { useEffect, useState } from "react";
import Card from "./Components/UI/Card";
import EducationalInfo from "./Components/Layout/Educational Experience/EducationalInfo";
import GeneralInfo from "./Components/Layout/General Information/GeneralInfo";
import WorkInfo from "./Components/Layout/Practical/WorkExperience";
import Preview from "./Components/Layout/Preview/Preview";

import Classes from "./App.module.css";

function App() {
  return (
    <div className={Classes.details}>
      <Card>
        <h1 style={{ textAlign: "center", marginBottom: "2%" }}>Resume</h1>
        <GeneralInfo />
        <br />
        <br />
        <WorkInfo />
        <br />
        <br />
        <EducationalInfo />
      </Card>
    </div>
  );
}

export default App;
