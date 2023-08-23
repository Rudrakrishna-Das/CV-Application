import { useEffect, useState } from "react";
import Classes from "./Preview.module.css";

const Preview = ({
  genInf,
  workInf,
  educationInf,
  onClose,
  onWorkDelete,
  onEducationDelete,
}) => {
  const [works, setWorks] = useState([]);
  const [educations, setEducations] = useState([]);
  const closePreview = () => {
    onClose();
  };

  useEffect(() => {
    setWorks(workInf);
    setEducations(educationInf);
  }, [workInf, educationInf]);

  const workDeleteHandler = (id) => {
    onWorkDelete(id);
  };

  const educationDeleteHandler = (id) => {
    onEducationDelete(id);
  };

  const workEditHandler = () => {};
  return (
    <section>
      <div onClick={closePreview} className={Classes.preview}></div>
      <div className={Classes.body}>
        <div className={Classes.main}>
          {/* GENERAL */}
          {genInf.length !== 0 && (
            <div className={Classes.gen}>
              <h1>{genInf.name}</h1>
              <hr />
              <hr />
              <div className={Classes.details}>
                <h6>{genInf.email}</h6>
                <h6>{genInf.phoneNumber}</h6>
              </div>
              <hr />
            </div>
          )}
          {/* WORK */}
          {works.length !== 0 && (
            <div className={Classes.work}>
              <h4>Work Information</h4>
              <hr />
              {works.map((work) => (
                <form key={work.id}>
                  <div className={Classes["work_details"]}>
                    <div className={Classes["company_details"]}>
                      <input type="text" disabled value={work.companyName} />
                      <input type="text" disabled value={work.position} />
                    </div>
                    <div className={Classes.duration}>
                      <input type="date" disabled value={work.startDate} />
                      <p>-</p>
                      <input type="date" disabled value={work.endDate} />
                    </div>
                  </div>
                  <textarea disabled value={work.desc} />
                  <div className={Classes.btn}>
                    <button onClick={workEditHandler} type="button">
                      Edit
                    </button>
                    <button type="submit">Save</button>
                    <button
                      onClick={workDeleteHandler.bind(null, work.id)}
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </form>
              ))}
            </div>
          )}
          {/* EDUCATION */}
          {educations.length !== 0 && (
            <div className={Classes.education}>
              <h4>Educational Information</h4>
              <hr />
              {educations.map((education) => (
                <form key={education.id}>
                  <div className={Classes["education_details"]}>
                    <div className={Classes["school_details"]}>
                      <input
                        type="text"
                        disabled
                        value={education.schoolName}
                      />
                      <input
                        type="text"
                        disabled
                        value={education.courseName}
                      />
                    </div>
                    <div className={Classes.duration}>
                      <input type="date" disabled value={education.startDate} />
                      <p>-</p>
                      <input type="date" disabled value={education.endDate} />
                    </div>
                  </div>
                  <div className={Classes.btn}>
                    <button type="button">Edit</button>
                    <button type="submit">Save</button>
                    <button
                      onClick={educationDeleteHandler.bind(null, education.id)}
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </form>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Preview;
