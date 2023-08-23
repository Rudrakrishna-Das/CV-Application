import { forwardRef } from "react";
import Classes from "./Input.module.css";

const Input = (props) => {
  const valueChangeHandler = (e) => {
    props.onValue(e.target.value);
  };
  return (
    <div
      className={`${Classes.input} ${
        props.type === "date" ? Classes.size : ""
      }`}
    >
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        id={props.name}
        placeholder={`Enter ${props.name}`}
        onChange={valueChangeHandler}
      />
    </div>
  );
};

export default Input;
