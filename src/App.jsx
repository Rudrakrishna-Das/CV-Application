import { useState } from "react";
import Card from "./Components/UI/Card";
import EducationalInfo from "./Components/Layout/Educational Experience/EducationalInfo";
import GeneralInfo from "./Components/Layout/General Information/GeneralInfo";
import WorkInfo from "./Components/Layout/Practical/WorkExperience";

import Classes from "./App.module.css";

function App() {
  const [allWorks, setAllWorks] = useState([
    { comp: <WorkInfo />, id: Math.random() },
  ]);
  const [allEducations, setAllEducations] = useState([
    { comp: <EducationalInfo />, id: Math.random() },
  ]);

  const addWorkField = () => {
    setAllWorks((prevState) => [
      ...prevState,
      { comp: <WorkInfo />, id: Math.random() },
    ]);
  };

  const addEducationField = () => {
    setAllEducations((prevState) => [
      ...prevState,
      { comp: <EducationalInfo />, id: Math.random() },
    ]);
  };

  const removeWorkField = (id) => {
    setAllWorks((prevState) => {
      const filteredItem = prevState.filter((work) => work.id !== id);
      return filteredItem;
    });
  };

  const removeEducationField = (id) => {
    setAllEducations((prevState) => {
      const updatedEducation = prevState.filter(
        (education) => education.id !== id
      );
      return updatedEducation;
    });
  };

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
          {allWorks.map((work, i) => (
            <li style={{ listStyle: "none", marginTop: "10px" }} key={work.id}>
              {work.comp}
              {i !== 0 && (
                <button
                  onClick={removeWorkField.bind(null, work.id)}
                  className={Classes.btn}
                >
                  Remove
                </button>
              )}
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
        {allEducations.map((education, i) => (
          <li
            style={{ listStyle: "none", marginTop: "10px" }}
            key={education.id}
          >
            {education.comp}
            {i !== 0 && (
              <button
                onClick={removeEducationField.bind(null, education.id)}
                className={Classes.btn}
              >
                Remove
              </button>
            )}
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
