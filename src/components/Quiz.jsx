import React, { Component } from "react";
import Answers from "./Answers";
import Circles from "./Circles";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "What is the COVE?",
        answers: [
          { "Code on v8 engine": false },
          { "Cats only validate emotions": false },
          { "Closed over variable environment": true }
        ]
      },
      {
        question: "Which of these is a real programming language?",
        answers: [{ LOLCode: true }, { LollyGag: false }, { Ratoon: false }]
      },
      {
        question: "Is Chris tarrant alive",
        answers: [{ Yes: true }, { "Probably not": false }, { Maybe: false }]
      },
      {
        question: "How tall is Liam",
        answers: [
          { Tall: true },
          { "Really tall": false },
          { "Quite tall": false }
        ]
      },
      {
        question: "HOw tall is Dave",
        answers: [
          { "Really tall": true },
          { Tall: false },
          { "Quite tall": false }
        ]
      },
      {
        question: "q6?",
        answers: [
          { "Code on v8 engine": false },
          { "Cats only validate emotions": false },
          { "Closed over variable environment": true }
        ]
      },
      {
        question: "q7?",
        answers: [{ LOLCode: true }, { LollyGag: false }, { Ratoon: false }]
      },
      {
        question: "q8",
        answers: [{ Yes: true }, { "Probably not": false }, { Maybe: false }]
      },
      {
        question: "q9",
        answers: [
          { Tall: true },
          { "Really tall": false },
          { "Quite tall": false }
        ]
      },
      {
        question: "q10",
        answers: [
          { Tall: true },
          { "Really tall": false },
          { "Quite tall": false }
        ]
      }
    ],
    results: [],
    questionNumber: 0,
    roundIsFinished: false,
    levelNumber: 1
  };

  handleClick = clickEvent => {
    let currentQuestion = clickEvent.target.id; 
    let answers = this.state.quiz[currentQuestion].answers; 
    let usersAnswer = clickEvent.target.textContent;

    answers.forEach(obj => {
      if (usersAnswer in obj) {
        if (obj[usersAnswer] === true) {
          this.setState(
            currentState => {
              let newQuestionNum;
              let newRoundIsFinished;
              if (![4, 9].includes(currentState.questionNumber)) {
                newQuestionNum = currentState.questionNumber + 1;
              } else {
                newQuestionNum = currentState.questionNumber + 1;
                newRoundIsFinished = true;
                currentState.levelNumber = currentState.levelNumber + 1
              }
              return {
                results: [...currentState.results, "green"],
                questionNumber: newQuestionNum,
                roundIsFinished: newRoundIsFinished
              };
            }
          );
        } else {
          this.setState(
            currentState => {
              let newQuestionNum;
              let newRoundIsFinished;
              if (![4, 9].includes(currentState.questionNumber)) {
                newQuestionNum = currentState.questionNumber + 1;
              } else {
                newQuestionNum = currentState.questionNumber + 1;
                newRoundIsFinished = true;
                currentState.levelNumber = currentState.levelNumber + 1
              }
              return {
                results: [...currentState.results, "red"],
                questionNumber: newQuestionNum,
                roundIsFinished: newRoundIsFinished
              };
            }
          );
        }
      }
    });
  };

  render() {
    const { questionNumber, quiz, results, roundIsFinished, levelNumber } = this.state;
    let score = 0;
    results.forEach(result => {
      if (result === "green") score++;
    });

    if (roundIsFinished === true) {
      //ADD FUNCTIONALITY TO THE BEGIN LEVEL 2 BUTTON TO MAKE IT GO BACK TO QUESTIONS (roundIsFinished should be false)
      return (
        <div>
          <h6>ROUND OVER</h6>
          <h3> You scored {score} out of 5</h3>
          <Circles results={results} questionNumber={questionNumber}/>
          <button onClick={() => this.setState({roundIsFinished: false, results: []})}>Begin Level {levelNumber}</button>
        </div>
      );
    } else {
      return (
        <div>
          <h6>Question {questionNumber + 1}</h6>
          <h3>{quiz[questionNumber].question}</h3>
          <Answers
            quiz={quiz}
            questionNumber={questionNumber}
            handleClick={this.handleClick}
          />
         <Circles results={results} questionNumber={questionNumber}/>
        </div>
      );
    }
  }
}

export default Quiz;
