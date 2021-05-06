import React from "react";

const Article = (props) => {
  return (
    <React.Fragment>
      <div height="150">
        <p
          style={{
            // display: "none",
            // display: props.article.question === undefined ? "none" : "block",
            display: props.article.question === undefined && "none",
          }}
        >
          <strong style={{ color: "yellow" }}>Question:</strong>{" "}
          {props.article.question}
        </p>
        <p style={{ borderStyle: props.article.question == null && "solid" }}>
          {/* <strong style={{ color: "yellow" }}>Answer:</strong>{" "} */}
          <strong style={{ color: "yellow" }}>
            {props.article.question == null ? "Blog" : "Answer"}:
          </strong>{" "}
          {props.article.answer}
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
};

export default Article;
