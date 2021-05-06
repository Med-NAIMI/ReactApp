import React from "react";

import "bootstrap/dist/css/bootstrap.css";

function Product(props) {
  return (
    <React.Fragment>
      <div className="container row">
        <div className="col-3"></div>
        <div className="col-3">
          <img src={props.product.image} className="m-4" />
        </div>
        <div className="col-3">
          <h1>{props.product.name}</h1>
          <p>
            Price:{" "}
            <strong className="text-success">{props.product.price}</strong>
          </p>
        </div>
        <div className="col-3"></div>
      </div>
    </React.Fragment>
  );
}
export default Product;
