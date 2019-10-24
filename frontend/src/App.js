import React from 'react';

import axios from'axios';
import _ from 'lodash';

import './App.css';
import Question from './question';
import Score from './score';

const colors = [
  '#fb929e',
  '#10ddc2',
  '#07689f',
  '#7dace4'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currQuestion: 0,
      score: 0
    }

    this.newQuestion = this.newQuestion.bind(this);
    this.initQuestions = this.initQuestions.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.onCorrect = this.onCorrect.bind(this);
  }

  async componentDidMount() {
    await this.initQuestions();
    this.resetScore();
  }

  async initQuestions() {
    console.log('Getting new questions')
    const questions = await axios.get('/api/questions');
    this.setState({
      questions: _.shuffle(questions.data),
    })
    await this.newQuestion();
  }

  async newQuestion() {
    if (!this.state.questions) {
      this.initQuestions();
    }
    console.log(this.state.questions);
    console.log('setting question');
    const numQuestions = this.state.questions.length;
    this.setState({
      currQuestion: (this.state.currQuestion + 1) % numQuestions
    })
    const newColor = _.sample(colors);
    document.body.style.backgroundColor = newColor;
  }

  getCurrentQuestion(index) {
    console.log(index)
    console.log(this.state.questions)
    console.log(`question: ${this.state.questions[index]}, `)
    return this.state.questions[index];
  }

  resetScore() {
    this.setState({
      score: 0,
    });
  }

  onCorrect() {
    this.setState({
      score: this.state.score + 1
    });
    this.newQuestion();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className='title'>
            Hello Futures Trivia!
          </p>
          {
            this.state.questions.length ?
            <Question question={this.getCurrentQuestion(this.state.currQuestion)} onCorrect={this.onCorrect}/> :
            <div>No current question</div>
          }
          <button onClick={this.newQuestion}>Get a new question</button>
          <Score score={this.state.score} />
        </header>
      </div>
    );
  }
}

export default App;
