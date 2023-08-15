import Classes from "./EducationalInfo.module.css";

import Input from "../../UI/Input";

const EducationalInfo = () => {
  return (
    <section className={Classes.section}>
      <h1>Educational Information</h1>
      <Input type="text" name="School Name" />
      <Input type="text" name="Course Name" />
      <div className={Classes.duration}>
        <Input type="date" name="Date Started" />
        <Input type="date" name="Date Completed" />
      </div>
    </section>
  );
};

export default EducationalInfo;
