import React, { Component } from 'react';
import Answers from './Answers';

class Quiz extends Component {
    state = {
        quiz: [{question: 'What is the COVE?', answers: [{'cold old vegetable eggs': false}, {'cats only validate emotions': false}, {'Closed over variable environment': true}], isCorrect: false}],
        questionNumber: 0
    }

    render() {
        const { questionNumber, quiz } = this.state;
        return (
            <div>
                <h6>Question {questionNumber + 1}</h6>
                <h3>{quiz[questionNumber].question}</h3>
                <Answers quiz={quiz} questionNumber={questionNumber}/>
            </div>
        );
    }
}

export default Quiz;