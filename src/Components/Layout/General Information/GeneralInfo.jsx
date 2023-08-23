import { useRef, useState } from "react";

import Classes from "./GeneralInfo.module.css";

const GeneralInfo = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const cvSubmitHandler = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      number.trim().length === 0
    ) {
      setHasError(true);
    } else {
      setIsSubmitted(true);
    }
  };
  const editHandler = () => {
    setIsSubmitted(false);
  };
  const getNameValueHandler = (e) => {
    setHasError(false);
    setName(e.target.value);
  };
  const getEmailValueHandler = (e) => {
    setHasError(false);
    setEmail(e.target.value);
  };
  const getNumberValueHandler = (e) => {
    setHasError(false);
    setNumber(e.target.value);
  };
  return (
    <section className={Classes.section}>
      <h1
        style={{
          textAlign: "left",
          textDecoration: "underline",
          marginBottom: "8px",
        }}
      >
        General Information
      </h1>
      {!isSubmitted ? (
        <form onSubmit={cvSubmitHandler} className={Classes.form}>
          <div className={Classes.input}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={getNameValueHandler}
            />
          </div>
          <div className={Classes.input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={getEmailValueHandler}
            />
          </div>
          <div className={Classes.input}>
            <label htmlFor="number">Number</label>
            <input
              type="number"
              id="number"
              placeholder="Enter your number"
              value={number}
              onChange={getNumberValueHandler}
            />
          </div>
          {hasError && (
            <h5 className={Classes.error}>Please Enter Proper Value</h5>
          )}
          <div className={Classes["action_button"]}>
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <section className={Classes["gen_info"]}>
          <h1>{name}</h1>
          <hr />
          <div className={Classes.info}>
            <h5>{email}</h5>
            <h5>{number}</h5>
          </div>
          <button onClick={editHandler} className={Classes.edit}>
            Edit
          </button>
        </section>
      )}
    </section>
  );
};

export default GeneralInfo;
