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
        question: "console.log( 1/ 0 ) = ??? ",
        answers: [{ Infinity: true }, { NaN: false }, { undefined: false }]
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
        question: "Which will return a random number between 1 and 3?",
        answers: [
          { "Math.floor(Math.random() * 3)": true },
          { "Math.random(Math.floor() * 3)": false },
          { "Math.floor(Math.random(3) * 10)": false }
        ]
      },

      //LEVEL 2//
      {
        question: "Which is better, Mocha & Chai, Jest, Cucumber?",
        answers: [{ "Mocha & Chai": true }, { Jest: true }, { Cucumber: false }]
      },
      {
        question: "Yes?",
        answers: [{ "what?": true }, { no: false }, { yes: false }]
      },
      {
        question: "How many plants are in the northcoders office?",
        answers: [{ 23: true }, { 15: false }, { "Too Many": false }]
      },
      {
        question: "How tall is Dave",
        answers: [
          { "Really tall": true },
          { Tall: false },
          { "Quite tall": false }
        ]
      },
      {
        question: "console.log(0.1 + 0.2) gives what?",
        answers: [{ 0.30000000000000004: true }, { 0.3: false }, { 3: false }]
      },
      //LEVEL 3//
      {
        question: "typeof Nan = ???",
        answers: [{ Bread: false }, { Nan: false }, { Number: true }]
      },
      {
        question: "hello ... ?",
        answers: [
          { "its me": false },
          { world: true },
          { "is it me you're looking for": false }
        ]
      },
      {
        question: "{} + [] = ???",
        answers: [{ 0: true }, { undefined: false }, { "{}[]": false }]
      },
      {
        question: "When was Node.js invented",
        answers: [{ "2008": false }, { "2009": true }, { "2010": false }]
      },
      {
        question: "[] + {}",
        answers: [
          { "[object Object]": true },
          { "[Object]": false },
          { undefined: false }
        ]
      }
    ],
    results1: [],
    results2: [],
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
        let color = "";
        obj[usersAnswer] === true ? (color = "green") : (color = "red");
        this.setState(
          currentState => {
            let newQuestionNum = currentState.questionNumber;
            let newRoundIsFinished;
            let playerTurn;
            if (currentState.player1Turn) {
              playerTurn = "results1";
            } else {
              playerTurn = "results2";
            }
            if (![4, 9].includes(currentState.questionNumber)) {
              if (
                currentState.results1.length !== currentState.results2.length
              ) {
                newQuestionNum++;
              }
            } else {
              if (
                currentState.results1.length !== currentState.results2.length
              ) {
                newQuestionNum++;
                newRoundIsFinished = true;
                currentState.levelNumber = currentState.levelNumber + 1;
              }
            }
            return {
              player1Turn: !currentState.player1Turn,
              [playerTurn]: [...currentState[playerTurn], color],
              questionNumber: newQuestionNum,
              roundIsFinished: newRoundIsFinished
            };
          },
          () => {
            console.log(this.state);
          }
        );
      }
    });
  };

  render() {
    const {
      questionNumber,
      quiz,
      results1,
      results2,
      roundIsFinished,
      levelNumber
    } = this.state;
    let score1 = 0;
    let score2 = 0;
    const circles = [0, 1, 2, 3, 4];
    results1.forEach(result => {
      if (result === "green") score1++;
    });
    results2.forEach(result => {
      if (result === "green") score2++;
    });

    if (questionNumber === 15) {
      return (
        <section>
          <h1>GAME OVER</h1>
          <img
            src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/11/5/1257435057154/African-pygmy-hedgehog-008.jpg?width=700&quality=85&auto=format&fit=max&s=b46d65f210d2d799f0493dcb370d35ed"
            alt="cutie"
          />
        </section>
      );
    }

    if (roundIsFinished === true) {
      return (
        <div>
          <h6>ROUND OVER</h6>
          <h3> Player 1 scored {score1} out of 5</h3>
          <h3> Player 2 scored {score2} out of 5</h3>
          <p>Player 1:</p>
          {circles.map(circle => {
            return (
              <Circles
                key={circle}
                results1={results1}
                results2={results2}
                questionNumber={questionNumber}
                i={circle}
                whichResults={results1}
              />
            );
          })}
          <p>Player 2:</p>
          {circles.map(circle => {
            return (
              <Circles
                key={circle}
                results1={results1}
                results2={results2}
                questionNumber={questionNumber}
                i={circle}
                whichResults={results2}
              />
            );
          })}
          <div>
            <button
              onClick={() =>
                this.setState({
                  roundIsFinished: false,
                  results1: [],
                  results2: []
                })
              }
            >
              Begin Level {levelNumber}
            </button>
          </div>
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
          <p>Player 1:</p>
          {circles.map(circle => {
            return (
              <Circles
                key={circle}
                results1={results1}
                results2={results2}
                questionNumber={questionNumber}
                i={circle}
                whichResults={results1}
              />
            );
          })}
          <p>Player 2:</p>
          {circles.map(circle => {
            return (
              <Circles
                key={circle}
                results1={results1}
                results2={results2}
                questionNumber={questionNumber}
                i={circle}
                whichResults={results2}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default Quiz;
