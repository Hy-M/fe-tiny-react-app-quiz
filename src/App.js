import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Quiz from './components/Quiz';

class App extends Component {
  render() {
    return (
      <div>
        <Title/>
          <section>
            <Quiz />
          </section>
        </div>
    );
  }
}

export default App;
