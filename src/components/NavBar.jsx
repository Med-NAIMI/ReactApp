import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <React.Fragment>
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
export default NavBar;
