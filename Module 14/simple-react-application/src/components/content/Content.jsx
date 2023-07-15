import React from "react";

const Content = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <div className="form-floating my-4">
            <textarea className="form-control" placeholder="Keeps your notes here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
            <label htmlFor="floatingTextarea2">Notes</label>
          </div>
          <button type="button" class="btn btn-primary">
            Submit
          </button>
          <div className="mt-4">
            <div className="card">
              <div className="card-body">This is some text within a card body.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
