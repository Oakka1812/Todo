import React, { useRef } from "react";

const Form = ({ btnHandler }) => {
  const tasks = useRef();

  return (
    <div>
      <div className="row ">
        <div className="col-9">
          <input
            type="text"
            ref={tasks}
            className="form-control"
            placeholder="Type your tasks..."
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary" onClick={() => btnHandler(tasks)}>
            <i className="fa-solid fa-plus me-2"></i>Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
