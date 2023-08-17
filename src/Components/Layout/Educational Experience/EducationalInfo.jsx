import { useRef, useState } from "react";

import Input from "../../UI/Input";

import Classes from "./EducationalInfo.module.css";

const EducationalInfo = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const schoolNameRef = useRef("");
  const courseNameRef = useRef("");
  const dateStartedRef = useRef("");
  const dateCompletedRef = useRef("");

  const cvSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      schoolNameRef.current.values,
      courseNameRef.current.values,
      dateStartedRef.current.values,
      dateCompletedRef.current.values
    );
    setIsDisabled(true);
  };

  const editHandler = () => {
    setIsDisabled(false);
  };
  return (
    <section className={Classes.section}>
      <form onSubmit={cvSubmitHandler} className={Classes.form}>
        <h1 style={{ textAlign: "left" }}>Educational Information</h1>
        <Input
          type="text"
          name="School Name"
          ref={schoolNameRef}
          disabled={isDisabled}
          value={schoolNameRef?.current.values}
        />
        <Input
          type="text"
          name="Course Name"
          ref={courseNameRef}
          disabled={isDisabled}
          value={courseNameRef?.current.values}
        />
        <div className={Classes.duration}>
          <Input
            type="date"
            name="Date Started"
            ref={dateStartedRef}
            disabled={isDisabled}
            value={dateStartedRef?.current.values}
          />
          <Input
            type="date"
            name="Date Completed"
            ref={dateCompletedRef}
            disabled={isDisabled}
            value={dateCompletedRef?.current.values}
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

export default EducationalInfo;
