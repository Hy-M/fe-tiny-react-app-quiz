import React from 'react';

const Answers = (props) => {
    console.log(props);
    const { quiz, questionNumber } = props;

    const randomIndex = Math.floor(Math.random() * 3);

    let index2 = 0;
    let index3 = 0;

    if (randomIndex === 0) {
        index2 = 1;
        index3 = 2;
    } else if (randomIndex === 1){
        index2 = 0;
        index3 = 2;
    } else if (randomIndex === 2){
        index2 = 1;
        index3 = 0;
    }

    return (
        <div>
            <button>{Object.keys(quiz[questionNumber].answers[randomIndex])[0]}</button>
            <button>{Object.keys(quiz[questionNumber].answers[index2])[0]}</button>
            <button>{Object.keys(quiz[questionNumber].answers[index3])[0]}</button>
        </div>
    );
};

export default Answers;