import React, { Component } from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.css";

// class Offer extends Component {//this class component isn t updated to deal with offer object as props
//   // constructor(props) {
//   //   super(props);
//   // }
//   render() {
//     console.log(this.props);

//     return (
//       <React.Fragment>
//         <div className="container m-4">
//           <img src={this.props.src} width="300" height="300" />
//           <h1 style={{ color: "red" }}>{this.props.owner} </h1>
//           <p>
//             <strong>Phone:</strong> {this.props.phone}{" "}
//           </p>
//           <p>
//             <strong>Email:</strong> {this.props.email}{" "}
//           </p>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

function Offer(props) {
  //the functional component is updated is updated to deal with offer as object for props
  console.log(props);

  return (
    <React.Fragment>
      <div className="container m-4">
        <img src={props.offer.src} width="300" height="300" />
        <h1 style={{ color: "red" }}>{props.offer.owner} </h1>
        <p>
          <strong>Phone:</strong> {props.offer.phone}{" "}
        </p>
        <p>
          <strong>Email:</strong> {props.offer.email}{" "}
        </p>
      </div>
    </React.Fragment>
  );
}

export default Offer;
