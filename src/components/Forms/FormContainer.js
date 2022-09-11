import React from "react";
import Form from "./Form";
import "./FormContainer.css";

const FormContainer = () => {
  return (
    <div className="form-container-outer">
      <div className="form-container-inner">
        <Form />
      </div>
    </div>
  );
};

export default FormContainer;
