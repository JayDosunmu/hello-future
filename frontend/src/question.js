import React from 'react';
import axios from 'axios';

import './question.css'

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: []
        }
        this.getAnswers = this.getAnswers.bind(this);
    }
    async componentDidMount() {
        await this.getAnswers(this.props.question)
    }

    async getAnswers(qid) {
        try {
            const parsedQid = parseInt(qid, 10);
            const answers = axios.get(`/api/answers/${parsedQid}`);
            console.log(`Getting answers: ${answers}`);
            return answers.data;
        } catch (err) {
            return [];
        }
    }

    // isCorrect(aid) {
    //     if (aid == )

    // }

    render() {
        return (
            <div>
                <div className='question'>
                    {this.props.question.text}
                </div>
                {
                    this.state.answers.forEach((val, i) => 
                        <div>{val.answerText}</div>
                    // <Answer index={val.aid} answer={val} isCorrect={this.isCorrect}/>)
                    )
                }
            </div>
        )
    }
}

export default Question;
