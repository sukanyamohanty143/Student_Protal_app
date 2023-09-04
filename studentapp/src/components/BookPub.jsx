import React, { useState } from "react";
import "./BookPub.css";
function BookPub() {
  const [bookName, setBookName] = useState("");
  const [bookType, setBookType] = useState("");
  const [status, setStatus] = useState("");
  const [publisherName, setPublisherName] = useState("");
  const [bookDetailsArr, setBookDetailsArr] = useState([]);

  const AddBookDetails = () => {
    let newArr = [...bookDetailsArr];
    newArr.push({
      Bookname: bookName,
      Booktype: bookType,
      Status: status,
      PublisherName: publisherName,
    });
    setBookDetailsArr(newArr);
    setBookName("");
    setBookType("");
    setStatus("");
    setPublisherName("");
  };

  return (
    <>
      <center>
        <h2 className="heading">Book Publication</h2>
      </center>
    
    <div className="main maincantener-near">
      <div className="maincantenerr d-flex justify-content-center">
        <div className="">
          <div className="col-md-5 position-relative textrow">
            <label htmlFor="validationTooltip01" className="form-label">
              Book Name
            </label>
            <input
              type="text"
              id="validationTooltip01"
              placeholder="Enter Book Name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="col-md-5 position-relative textrow">
            <label htmlFor="validationTooltip04" className="form-label">
              Book Type
            </label>
            <select id="validationTooltip04" required>
              <option
                value={bookType}
                onChange={(e) => setBookType(e.target.value)}
              >
                Select
              </option>
              <option value="">...</option>
              <option value="">...</option>
              <option value="">...</option>
            </select>
            <div className="invalid-tooltip">
              Please select a valid Designation.
            </div>
          </div>
          <br />
          <div className="col-md-5 position-relative textrow">
            <label htmlFor="validationTooltip04" className="form-label">
              Status
            </label>
            <select id="validationTooltip04" required>
              <option
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                Select
              </option>
              <option value="klvl">klvl</option>
              <option value="">...</option>
              <option value="">...</option>
            </select>
            <div className="invalid-tooltip">
              Please select a valid Designation.
            </div>
          </div>
          <br />
          <div className="col-md-5 position-relative textrow">
            <label htmlFor="validationTooltip01" className="form-label">
              Publisher Name
            </label>
            <input
              type="text"
              id="validationTooltip01"
              value={publisherName}
              onChange={(e) => setPublisherName(e.target.value)}
              required
            />
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

          <div className="col-12">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={AddBookDetails}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BookPub;
