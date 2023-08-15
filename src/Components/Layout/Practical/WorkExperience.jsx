import Classes from "./WorkExperience.module.css";

import Input from "../../UI/Input";

const WorkInfo = () => {
  return (
    <section className={Classes.section}>
      <h1>Work Experience</h1>
      <Input type="text" name="Company Name" />
      <Input type="text" name="Position Name" />
      <Input type="date" name="Date Started" />
    </section>
  );
};

export default WorkInfo;
