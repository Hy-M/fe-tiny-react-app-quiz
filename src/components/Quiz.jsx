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
    results1: [],
    results2: [],
    // results: [],
    questionNumber: 0,
    roundIsFinished: false,
    levelNumber: 1,
    player1Turn: true
  };

  handleClick = clickEvent => {
    let currentQuestion = clickEvent.target.id; 
    let answers = this.state.quiz[currentQuestion].answers; 
    let usersAnswer = clickEvent.target.textContent;

    answers.forEach(obj => { 
      if (usersAnswer in obj) {
        let color = '';
        obj[usersAnswer] === true ? color = 'green' : color = 'red';
        this.setState(
            currentState => {
              let newQuestionNum = currentState.questionNumber;
              let newRoundIsFinished;
              let playerTurn;
              if (currentState.player1Turn) {
                  playerTurn = 'results1'
              } else {
                  playerTurn = 'results2'
              }
              if (![4, 9].includes(currentState.questionNumber)) {
                  if (currentState.results1.length !== currentState.results2.length ) {
                       newQuestionNum++;
                  }
              } else {
                if (currentState.results1.length !== currentState.results2.length ) {
                    newQuestionNum++;
                    newRoundIsFinished = true;
                    currentState.levelNumber = currentState.levelNumber + 1
               }
              
              }
              return {
                player1Turn: !currentState.player1Turn,
                [playerTurn]: [...currentState[playerTurn], color],
                questionNumber: newQuestionNum,
                roundIsFinished: newRoundIsFinished
              };
            }
        );
      }
    });
  };

  render() {
    const { questionNumber, quiz, results1, results2, roundIsFinished, levelNumber } = this.state;
    let score1 = 0;
    let score2= 0;
    results1.forEach(result => {
      if (result === "green") score1++;
    });
    results2.forEach(result => {
        if (result === "green") score2++;
      });
    

    if (roundIsFinished === true) {
      return (
        <div>
          <h6>ROUND OVER</h6>
          <h3> Player 1 scored {score1} out of 5</h3>
          <h3> Player 2 scored {score2} out of 5</h3>
          <Circles results1={results1} results2={results2} questionNumber={questionNumber}/>
          <button onClick={() => this.setState({roundIsFinished: false, results1: [], results2: []})}>Begin Level {levelNumber}</button>
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
         <Circles results1={results1} results2={results2} questionNumber={questionNumber}/>
        </div>
      );
    }
  }
}

export default Quiz;
