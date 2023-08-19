import { useState } from "react";
import Card from "./Components/UI/Card";
import EducationalInfo from "./Components/Layout/Educational Experience/EducationalInfo";
import GeneralInfo from "./Components/Layout/General Information/GeneralInfo";
import WorkInfo from "./Components/Layout/Practical/WorkExperience";
import Preview from "./Components/Layout/Preview/Preview";

import Classes from "./App.module.css";

function App() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [workInfo, setWorkInfo] = useState([]);
  const [generalInfo, setGeneralInfo] = useState([]);
  const [educationalInfo, setEducationalInfo] = useState([]);

  const getGeneralInfoHandler = (info) => {
    setGeneralInfo(info);
  };

  const getEducationInfoHandler = (info) => {
    setEducationalInfo(info);
  };

  const getWorkInfoHandler = (info) => {
    setWorkInfo(info);
  };

  const openPreviewHandler = () => {
    setPreviewOpen(true);
    window.scrollTo(0, 0);
  };

  const previewCLoseHandler = () => {
    setPreviewOpen(false);
  };

  return (
    <div className={Classes.details}>
      <Card>
        <h1 style={{ textAlign: "center", marginBottom: "2%" }}>Resume</h1>
        <GeneralInfo genInfo={getGeneralInfoHandler} />
        <br />
        <br />
        <WorkInfo workInfo={getWorkInfoHandler} />
        <br />
        <br />
        <EducationalInfo educationInfo={getEducationInfoHandler} />
      </Card>

      <button onClick={openPreviewHandler} className={Classes.preview}>
        Preview
      </button>
      {previewOpen && (
        <Preview genInfo={generalInfo} onClose={previewCLoseHandler} />
      )}
    </div>
  );
}

export default App;
