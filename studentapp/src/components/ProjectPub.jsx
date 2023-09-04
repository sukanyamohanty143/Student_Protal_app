import React, { useState } from "react";
import "./ProjectPub.css";

function ProjectPub() {
  const [projectName, setProjectName] = useState("");
  const [catagory, setCatagory] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [status, setStatus] = useState("");
  const [projectDetailsArr, setProjectDetailsArr] = useState([]);

  const AddProjectDetails = () => {
    let newArr = [...projectDetailsArr];
    newArr.push({
      Projectname: projectName,
      Catagory: catagory,
      SubmissionDate: submissionDate,
      Status: status,
    });
    setProjectDetailsArr(newArr);
    setProjectName("");
    setCatagory("");
    setSubmissionDate("");
    setStatus("");
  };
  return (
      <div className="project-publication maincantener-projectpub">
            <h2 className="heading">Project Publication</h2>
          <div className="col-md-5 position-relative textrow">
            <label htmlFor="validationTooltip01" className="form-label">
              Project Name
            </label>
            <input
              type="text"
              id="validationTooltip01"
              placeholder="Enter Book Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="col-md-5 position-relative textrow">
            <label htmlFor="validationTooltip04" className="form-label">
              Catagory
            </label>
            <select
              
              id="validationTooltip04"
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Solo">Solo</option>
              <option value="Jount">Jount</option>
              <option value="Group">Group</option>
            </select>
            <div className="invalid-tooltip">
              Please select a valid Catagory.
            </div>
          </div>
          <br />
          <div className="col-md-5 position-relative textrow">
            <label htmlFor="validationTooltip01" className="form-label">
              Submission Date
            </label>
            <input
              type="date"
              id="validationTooltip01"
              value={submissionDate}
              onChange={(e) => setSubmissionDate(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="col-md-5 position-relative textrow">
            <label htmlFor="validationTooltip04" className="form-label">
              Status
            </label>
            <select
              
              id="validationTooltip04"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Submited">Submited</option>
              <option value="On Going">On Going</option>
            </select>
            <div className="invalid-tooltip">Please select a valid Status.</div>
          </div>
          <br />

          <div class="custom-file-input">
            <p>Upload a file</p>

            <div>
              <label htmlFor="upload-file" className="upload-file-oa button-3">
                Choose a file
              </label>
              <br />
              <span className="span-text">More than 2MB</span>{" "}
              <input type="file" id="upload-file" />
            </div>
          </div>
            <button
              className="btn btn-primary primary-project-submit"
              type="submit"
              onClick={AddProjectDetails}
            >
              Submit
            </button>
        </div>
    
  );
}

export default ProjectPub;
