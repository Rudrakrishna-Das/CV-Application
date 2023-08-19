import { useRef, useState } from "react";

import Input from "../../UI/Input";

import Classes from "./GeneralInfo.module.css";

const GeneralInfo = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const numberRef = useRef("");
  const cvSubmitHandler = (e) => {
    e.preventDefault();
    const generalDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: numberRef.current.value,
    };
    props.genInfo(generalDetails);

    setIsDisabled(true);
  };
  const editHandler = () => {
    setIsDisabled(false);
  };
  return (
    <section className={Classes.section}>
      <form onSubmit={cvSubmitHandler} className={Classes.form}>
        <h1 style={{ textAlign: "left" }}>General Information</h1>
        <Input
          type="text"
          name="Name"
          ref={nameRef}
          disabled={isDisabled}
          value={nameRef?.current.values}
        />
        <Input
          type="email"
          name="Email"
          ref={emailRef}
          disabled={isDisabled}
          value={emailRef?.current.values}
        />
        <Input
          type="number"
          name="Phone Number"
          ref={numberRef}
          disabled={isDisabled}
          value={numberRef?.current.values}
        />
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

export default GeneralInfo;
