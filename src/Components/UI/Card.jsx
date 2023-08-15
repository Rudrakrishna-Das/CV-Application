import Classes from "./Card.module.css";

const Card = (props) => {
  return (
    <main className={Classes.card}>
      <form className={Classes.form}>{props.children}</form>
    </main>
  );
};

export default Card;
