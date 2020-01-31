import React from 'react';

const Circles = (props) => {
    const { results, questionNumber } = props;
    return (
        <section>
        <div
          className={results[0] ? results[0] : "circle"}
          id={questionNumber}
        ></div>
        <div
          className={results[1] ? results[1] : "circle"}
          id={questionNumber}
        ></div>
        <div
          className={results[2] ? results[2] : "circle"}
          id={questionNumber}
        ></div>
        <div
          className={results[3] ? results[3] : "circle"}
          id={questionNumber}
        ></div>
        <div
          className={results[4] ? results[4] : "circle"}
          id={questionNumber}
        ></div>
      </section>
    );
};

export default Circles;