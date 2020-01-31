import React from "react";

const Circles = props => {
  const { results1, results2, questionNumber, i, whichResults } = props;

  return (
    <div
      className={
        results1[i] && results2[i]
          ? whichResults[i]
            ? whichResults[i]
            : "circle"
          : "circle"
      }
      id={questionNumber}
    ></div>
  );
};

export default Circles;
