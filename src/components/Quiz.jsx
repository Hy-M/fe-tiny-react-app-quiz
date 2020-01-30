import React, { Component } from 'react';
import Answers from './Answers';

class Quiz extends Component {
    state = {
        quiz: [
            {question: 'What is the COVE?', 
            answers: [
                {'Code on v8 engine': false}, 
                {'Cats only validate emotions': false}, 
                {'Closed over variable environment': true}
            ]
            },
            {question: 'Which of these is a real programming language?', 
            answers: [
                {'LOLCode': true}, 
                {'LollyGag': false}, 
                {'Ratoon': false}
            ]
            },
            {question: 'Is Chris tarrant alive', 
            answers: [
                {'Yes': true}, 
                {'Probably not': false}, 
                {'Maybe': false}
            ]
            },
            {question: 'How tall is Liam', 
            answers: [
                {'Tall': true}, 
                {'Really tall': false}, 
                {'Quite tall': false}
            ]
            },
            {question: 'HOw tall is Dave', 
            answers: [
                {'Really tall': true}, 
                {'Tall': false}, 
                {'Quite tall': false}
            ]
            }
        ],
        results: [],
        questionNumber: 0
    }

    handleClick = (clickEvent) => {
        let currentQuestion = clickEvent.target.id; // which question is being asked
        let answers = this.state.quiz[currentQuestion].answers; // get the answers for that specific q
        let usersAnswer = clickEvent.target.textContent; // button the user clicked for their answer

        answers.forEach((obj) => {      
            if (usersAnswer in obj) {
                if (obj[usersAnswer] === true) {
                    this.setState(currentState => {
                        let newQuestionNum;
                        if (currentState.questionNumber !== 4) {
                            newQuestionNum = currentState.questionNumber + 1;
                        } else {
                            newQuestionNum = currentState.questionNumber;
                        }
                        return {results: [...currentState.results, 'green'], questionNumber: newQuestionNum}
                    }, () => {
                        console.log(this.state);
                        
                    })
                } else {
                    this.setState(currentState => {
                        let newQuestionNum;
                        if (currentState.questionNumber !== 4) {
                            newQuestionNum = currentState.questionNumber + 1;
                        }else {
                            newQuestionNum = currentState.questionNumber;
                        }
                        return {results: [...currentState.results, 'red'],  questionNumber: newQuestionNum}
                    })
                }
            }
        })
    }

    render() {
        const { questionNumber, quiz , results} = this.state;
        
        return (
            <div>
                <h6>Question {questionNumber + 1}</h6>
                <h3>{quiz[questionNumber].question}</h3>
                <Answers quiz={quiz} questionNumber={questionNumber} handleClick={this.handleClick}/>
             <section>
                <div className={results[0] ? results[0] : "circle"} id={questionNumber}></div>
                <div className={results[1] ? results[1] : "circle"} id={questionNumber}></div>
                <div className={results[2] ? results[2] : "circle"} id={questionNumber}></div>
                <div className={results[3] ? results[3] : "circle"} id={questionNumber}></div>
                <div className={results[4] ? results[4] : "circle"} id={questionNumber}></div>
           </section>
           </div>
        );
    }
}

export default Quiz;