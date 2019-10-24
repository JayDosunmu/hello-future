const { Pool } = require('pg');

const {
    DATABASE_URL: connectionString
} = process.env;
const pool = new Pool({ connectionString });

/**
 * @returns {Array} list of question objects
 */
async function getQuestions() {
    // const { rows } = await pool.query('SELECT * FROM questions;');
    rows = [
    {
        "text": "You can purchase 14 tickets for $21 at a musuem. How much is 1 ticket?",
        "qid": 1,
        "aid": 1,
        "category": "Math"
    },
    {
        "text": "Continue this pattern: 144, 121, 100, 81, 64 ",
        "qid": 2,
        "aid": 1,
        "category": "Math"
    },
    {
        "text": "What does the Roman Numeral 'C' represent?",
        "qid": 3,
        "aid": 4,
        "category": "Math"
    },
    {
        "text": "Which of the following numbers gives 240 when added to its own square?",
        "qid": 4,
        "aid": 1,
        "category": "Math"
    },
    {
        "text": "Find the odd one out: 4, 9, 25, 35, 36, 64",
        "qid": 5,
        "aid": 3,
        "category": "Math"
    },
    {
        "text": "What is the diameter of Earth ?",
        "qid": 6,
        "aid": 2,
        "category": "Science"
    },
    {
        "text": "Who was the father of computer?",
        "qid": 8,
        "aid": 1,
        "category": "Computers"
    },
    {
        "text": "What was Dorothy's last name in The Wizard of OZ ?",
        "qid": 7,
        "aid": 4,
        "category": "Entertainment"
    },
    {
        "text": "How many months have 28 days?",
        "qid": 9,
        "aid": 3,
        "category": ""
    }
]
    return rows;
}

/**
 * 
 * @param {string} qid question id
 * @returns {Array} list of answer objects
 */
async function getAnswers(qid) {
    // const { rows } = await pool.query('SELECT * FROM answers WHERE qid=$1;', [qid]);
    rows = [
    {
        "answertext": "$1.50",
        "qid": 1,
        "aid": 1,
        "category": "Math"
    },
    {
        "answertext": "$1.00",
        "qid": 1,
        "aid": 2,
        "category": "Math"
    },
    {
        "answertext": "$2.00",
        "qid": 1,
        "aid": 3,
        "category": "Math"
    },
    {
        "answertext": "$1.25",
        "qid": 1,
        "aid": 4,
        "category": "Math"
    }
]
    return rows;
}

module.exports = {
    getQuestions,
    getAnswers,
}
