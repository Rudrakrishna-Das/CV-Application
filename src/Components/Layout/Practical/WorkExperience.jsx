import { useState } from "react";

import Classes from "./WorkExperience.module.css";

const WorkInfo = () => {
  const [hasError, setHasError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const cvSubmitHandler = (e) => {
    e.preventDefault();
    if (
      companyName.trim().length === 0 ||
      positionName.trim().length === 0 ||
      startDate.trim().length === 0 ||
      endDate.trim().length === 0 ||
      description.trim().length === 0
    ) {
      setHasError(true);
    } else {
      setIsSubmitted(true);
    }
  };

  const getCompanyNameValueHandler = (e) => {
    setHasError(false);
    setCompanyName(e.target.value);
  };
  const getPositionNameValueHandler = (e) => {
    setHasError(false);
    setPositionName(e.target.value);
  };
  const getStartDateNameValueHandler = (e) => {
    setHasError(false);
    setStartDate(e.target.value);
  };
  const getEndDateValueHandler = (e) => {
    setHasError(false);
    setEndDate(e.target.value);
  };
  const getdescriptionValueHandler = (e) => {
    setHasError(false);
    setDescription(e.target.value);
  };

  const editHandler = () => {
    setIsSubmitted(false);
  };

  return (
    <section className={Classes.section}>
      {!isSubmitted ? (
        <form onSubmit={cvSubmitHandler} className={Classes.form}>
          <div className={Classes.input}>
            <label htmlFor="companyname">Company Name</label>
            <input
              type="text"
              id="companyname"
              placeholder="Enter your company name"
              value={companyName}
              onChange={getCompanyNameValueHandler}
            />
          </div>
          <div className={Classes.input}>
            <label htmlFor="positionname">Position Name</label>
            <input
              type="text"
              id="positionname"
              placeholder="Enter your position name"
              value={positionName}
              onChange={getPositionNameValueHandler}
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
          <div className={Classes["job_description"]}>
            <label htmlFor="description">Main Responsibilities</label>
            <textarea
              id="description"
              placeholder="Type your responsibilities here"
              value={description}
              onChange={getdescriptionValueHandler}
            />
          </div>
          {hasError && (
            <h5 className={Classes.error}>Any field can not be empty</h5>
          )}
          <div className={Classes["action_button"]}>
            <button type="submit"> Submit</button>
          </div>
        </form>
      ) : (
        <div className={Classes["work_info"]}>
          <div className={Classes["company_work_details"]}>
            <div className={Classes["company_details"]}>
              <h3>{companyName}</h3>
              <h4>{positionName}</h4>
            </div>
            <div className={Classes.duration}>
              <h5>{startDate}</h5>
              <p>-</p>
              <h5>{endDate}</h5>
            </div>
          </div>
          <p className={Classes.description}>{description}</p>
          <button onClick={editHandler} className={Classes.edit}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
};

export default WorkInfo;
