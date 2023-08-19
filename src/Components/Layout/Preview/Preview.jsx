import Classes from "./Preview.module.css";

const Preview = ({ genInfo, onClose }) => {
  console.log(genInfo);

  const closePreview = () => {
    onClose();
  };
  return (
    <section>
      <div onClick={closePreview} className={Classes.preview}></div>
      <div className={Classes.body}>
        <div className={Classes["main"]}>
          <div className={Classes.gen}>
            <h1>{genInfo.name}</h1>
            <h6>{genInfo.email}</h6>
            <h6>{genInfo.phoneNumber}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
