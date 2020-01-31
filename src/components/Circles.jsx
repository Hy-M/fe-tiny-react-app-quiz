import React from "react";

const Circles = props => {
  const { results1, results2, questionNumber } = props;
  for (let i = 0; i < 5; i++) {
    console.log(results1[i], results2[i]);
  }

  return (
    <section>
      <p>Player 1:</p>
      <div
        className={
          results1[0] && results2[0]
            ? results1[0]
              ? results1[0]
              : "circle"
            : "circle"
        }
        id={questionNumber}
      ></div>
      <div
        className={
          results1[1] && results2[1]
            ? results1[1]
              ? results1[1]
              : "circle"
            : "circle"
        }
        id={questionNumber}
      ></div>
      <div
        className={
          results1[2] && results2[2]
            ? results1[2]
              ? results1[2]
              : "circle"
            : "circle"
        }
        id={questionNumber}
      ></div>
      <div
        className={
          results1[3] && results2[3]
            ? results1[3]
              ? results1[3]
              : "circle"
            : "circle"
        }
        id={questionNumber}
      ></div>
      <div
        className={
          results1[4] && results2[4]
            ? results1[4]
              ? results1[4]
              : "circle"
            : "circle"
        }
        id={questionNumber}
      ></div>

      <p>Player 2:</p>
      <div
        className={results2[0] ? results2[0] : "circle"}
        id={questionNumber}
      ></div>
      <div
        className={results2[1] ? results2[1] : "circle"}
        id={questionNumber}
      ></div>
      <div
        className={results2[2] ? results2[2] : "circle"}
        id={questionNumber}
      ></div>
      <div
        className={results2[3] ? results2[3] : "circle"}
        id={questionNumber}
      ></div>
      <div
        className={results2[4] ? results2[4] : "circle"}
        id={questionNumber}
      ></div>
    </section>
  );
};

export default Circles;
