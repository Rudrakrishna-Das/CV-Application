import { useState } from "react";
import Card from "./Components/UI/Card";
import EducationalInfo from "./Components/Layout/Educational Experience/EducationalInfo";
import GeneralInfo from "./Components/Layout/General Information/GeneralInfo";
import WorkInfo from "./Components/Layout/Practical/WorkExperience";

import Classes from "./App.module.css";

const works = [];
const educations = [];
function App() {
  const [workNumber, setWorkNumber] = useState(1);
  const [educationNumber, setEducationNumber] = useState(1);

  const addWorkField = () => {
    setWorkNumber((prevState) => prevState + 1);
  };

  const addEducationField = () => {
    setEducationNumber((prevState) => prevState + 1);
  };

  for (let i = works.length; i < workNumber; i++) {
    works.push({ comp: <WorkInfo />, id: Math.random() });
  }
  for (let i = educations.length; i < educationNumber; i++) {
    educations.push({ comp: <EducationalInfo />, id: Math.random() });
  }
  return (
    <div className={Classes.details}>
      <Card>
        <h1 style={{ textAlign: "center", marginBottom: "2%" }}>Resume</h1>
        <GeneralInfo />
        <br />
        <br />
        <h1
          style={{
            textAlign: "left",
            textDecoration: "underline",
            marginBottom: "8px",
          }}
        >
          Work Experience
        </h1>
        <ul>
          {works.map((work) => (
            <li style={{ listStyle: "none", marginTop: "10px" }} key={work.id}>
              {work.comp}
            </li>
          ))}
        </ul>
        <button className={Classes.btn} onClick={addWorkField}>
          Add another work
        </button>
        <br />
        <br />
        <h1
          style={{
            textAlign: "left",
            textDecoration: "underline",
            marginBottom: "8px",
          }}
        >
          Educational Information
        </h1>
        {educations.map((education) => (
          <li
            style={{ listStyle: "none", marginTop: "10px" }}
            key={education.id}
          >
            {education.comp}
          </li>
        ))}
        <button className={Classes.btn} onClick={addEducationField}>
          Add another Education
        </button>
      </Card>
    </div>
  );
}

export default App;
