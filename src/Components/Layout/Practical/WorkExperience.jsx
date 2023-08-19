import { useRef, useState } from "react";

import Input from "../../UI/Input";

import Classes from "./WorkExperience.module.css";

const WorkInfo = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const companyNameRef = useRef("");
  const positionNameRef = useRef("");
  const dateStartedRef = useRef("");
  const dateEndRef = useRef("");
  const descriptionRef = useRef("");

  const cvSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      companyNameRef.current.value,
      positionNameRef.current.value,
      dateStartedRef.current.value,
      dateEndRef.current.value,
      descriptionRef.current.value
    );
    setIsDisabled(true);
  };
  const editHandler = () => {
    setIsDisabled(false);
  };
  return (
    <section className={Classes.section}>
      <form onSubmit={cvSubmitHandler} className={Classes.form}>
        <h1 style={{ textAlign: "left" }}>Work Experience</h1>
        <Input
          type="text"
          name="Company Name"
          ref={companyNameRef}
          disabled={isDisabled}
          value={companyNameRef?.current.values}
        />
        <Input
          type="text"
          name="Position Name"
          ref={positionNameRef}
          disabled={isDisabled}
          value={positionNameRef?.current.values}
        />
        <div className={Classes.date}>
          <Input
            type="date"
            name="Start Date"
            ref={dateStartedRef}
            disabled={isDisabled}
            value={dateStartedRef?.current.values}
          />
          <Input
            type="date"
            name="End Date"
            ref={dateEndRef}
            disabled={isDisabled}
            value={dateEndRef?.current.values}
          />
        </div>
        <div className={Classes["job_description"]}>
          <label htmlFor="description">Main Responsibilities</label>
          <textarea
            id="description"
            placeholder="Type your responsibilities here"
            ref={descriptionRef}
            disabled={isDisabled}
            value={descriptionRef.current.values}
          />
        </div>
        <div className={Classes["action_button"]}>
          {isDisabled && (
            <button onClick={editHandler} type="button">
              Edit
            </button>
          )}
          <button type="submit"> Submit</button>
        </div>
      </form>
    </section>
  );
};

export default WorkInfo;
