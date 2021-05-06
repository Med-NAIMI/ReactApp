import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <React.Fragment>
      <footer className="container bg-secondary">
        <span className="text-primary">&#169; 2021</span>
        <p>this is the footer</p>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
