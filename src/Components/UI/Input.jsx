import { forwardRef } from "react";
import Classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={Classes.input}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        id={props.name}
        ref={ref}
        placeholder={`Enter ${props.name}`}
        disabled={props.disabled}
      />
    </div>
  );
});

export default Input;
