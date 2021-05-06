import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../MyStyles.css";

function CheckboxDescription(props) {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Select your {props.input.name}!</h1>
        {/* <p className="custom">let's customise CSS shit!</p> */}
      </div>
    </React.Fragment>
  );
}
export default CheckboxDescription;
