import Classes from "./GeneralInfo.module.css";

import Input from "../../UI/Input";

const GeneralInfo = () => {
  return (
    <section className={Classes.section}>
      <h1>General Information</h1>
      <Input type="text" name="Name" />
      <Input type="email" name="Email" />
      <Input type="number" name="Phone Number" />
    </section>
  );
};

export default GeneralInfo;
