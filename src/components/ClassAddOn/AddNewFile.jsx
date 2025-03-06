import React from 'react'

const AddNewFile = () => {
  return (
    <div
    className="modal fade"
    id="upload"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add new file!</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body text-center">
          <div className="upload-box">
            <label style={{ cursor: "pointer" }}>
              <input type="file" style={{ display: "none" }} />
              <img src="assets/upload.png" alt="Upload Icon" />
              <p>Drag &amp; Drop or Choose file to upload</p>
              <span>CSV, Doc, pdf</span>
            </label>
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-between">
          <div className="help-center">
            <img src="assets/help.png" alt="Help Icon" /> Help Center
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              onclick="openModal()"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddNewFile