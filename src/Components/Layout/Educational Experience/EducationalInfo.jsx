import { useRef, useState } from "react";

import Classes from "./EducationalInfo.module.css";

const EducationalInfo = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const cvSubmitHandler = (e) => {
    e.preventDefault();
    if (
      schoolName.trim().length === 0 ||
      courseName.trim().length === 0 ||
      startDate.trim().length === 0 ||
      endDate.trim().length === 0
    ) {
      setHasError(true);
    } else {
      setIsSubmitted(true);
    }
  };

  const getSchoolNameValueHandler = (e) => {
    setSchoolName(e.target.value);
  };

  const getCourseNameValueHandler = (e) => {
    setCourseName(e.target.value);
  };

  const getStartDateNameValueHandler = (e) => {
    setHasError(false);
    setStartDate(e.target.value);
  };
  const getEndDateValueHandler = (e) => {
    setHasError(false);
    setEndDate(e.target.value);
  };

  const editHandler = () => {
    setIsSubmitted(false);
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
        Educational Information
      </h1>
      {!isSubmitted ? (
        <form onSubmit={cvSubmitHandler} className={Classes.form}>
          <div className={Classes.input}>
            <label htmlFor="schoolname">School Name</label>
            <input
              type="text"
              id="schoolname"
              placeholder="Enter your company name"
              value={schoolName}
              onChange={getSchoolNameValueHandler}
            />
          </div>
          <div className={Classes.input}>
            <label htmlFor="coursename">Course Name</label>
            <input
              type="text"
              id="coursename"
              placeholder="Enter your position name"
              value={courseName}
              onChange={getCourseNameValueHandler}
            />
          </div>
          <div className={Classes.date}>
            <div className={Classes.input}>
              <label htmlFor="startdate">Start Date</label>
              <input
                type="date"
                id="startdate"
                placeholder="Enter your start date"
                value={startDate}
                onChange={getStartDateNameValueHandler}
              />
            </div>
            <div className={Classes.input}>
              <label htmlFor="enddate">End Date</label>
              <input
                type="date"
                id="enddate"
                placeholder="Enter your end date"
                value={endDate}
                onChange={getEndDateValueHandler}
              />
            </div>
          </div>
          {hasError && (
            <h5 className={Classes.error}>Any field can't be empty</h5>
          )}
          <div className={Classes["action_button"]}>
            <button type="submit"> Submit</button>
          </div>
        </form>
      ) : (
        <div className={Classes["education_info"]}>
          <div className={Classes["school_details"]}>
            <div className={Classes["education_details"]}>
              <h2>{schoolName}</h2>
              <h4>{courseName}</h4>
            </div>
            <div className={Classes.time}>
              <h5>{startDate}</h5>
              <p>-</p>
              <h5>{endDate}</h5>
            </div>
          </div>
          <button onClick={editHandler} className={Classes.edit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
};

export default EducationalInfo;
