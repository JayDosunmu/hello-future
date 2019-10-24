const { Pool } = require('pg');

const {
    DATABASE_URL: connectionString
} = process.env;
const pool = new Pool({ connectionString });

/**
 * @returns {Array} list of question objects
 */
async function getQuestions() {
    return pool.query('SELECT * FROM questions;');
}

/**
 * 
 * @param {string} qid question id
 * @returns {Array} list of answer objects
 */
async function getAnswers(qid) {
    return pool.query('SELECT * FROM answers WHERE qid=$1;', [qid]);
}

module.exports = {
    getQuestions,
    getAnswers,
}
