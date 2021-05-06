import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const MyIntro = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1 style={{color: "red"}}>NAIMI Med</h1>
        <p>I m Med, i m taking care of my self and my family!</p>
        <strong>I want to visit</strong>
        <ul>
          <li>Ifrane</li>
          <li>Tafoughalt</li>
          <li>Zegzel</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MyIntro;

// class Intro extends Component {
//   render() {
//     return (
//       <React.Fragment >
//           <div className="container">
//         <h1>NAIMI Med</h1>
//         <p>I m Med, i m taking care of my self and my family!</p>
//         <strong>I want to visit</strong>
//         <ul >
//           <li>Ifrane</li>
//           <li>Tafoughalt</li>
//           <li>Zegzel</li>
//         </ul>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Intro;
