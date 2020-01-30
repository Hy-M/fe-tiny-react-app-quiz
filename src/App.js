import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Quiz from './components/Quiz';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
          <main>
            <Quiz />
          </main>
        </div>
    );
  }
}

export default App;
