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
            return axios.get(`/api/answers/${parsedQid}`);
        } catch (err) {
            return [];
        }
    }

    render() {
        return (
            <div>
                <div className='question'>
                    {this.props.question.text}
                </div>
            </div>
        )
    }
}

export default Question;
