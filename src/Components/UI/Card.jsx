import Classes from "./Card.module.css";

const Card = (props) => {
  return <main className={Classes.card}>{props.children}</main>;
};

export default Card;
