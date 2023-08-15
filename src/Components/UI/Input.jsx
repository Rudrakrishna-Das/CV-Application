import Classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={Classes.input}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        id={props.name}
        placeholder={`Enter ${props.name}`}
      />
    </div>
  );
};

export default Input;
