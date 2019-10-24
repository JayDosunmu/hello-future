const { Pool } = require('pg');

const {
    DATABASE_URL: connectionString
} = process.env;
const pool = new Pool({ connectionString });

/**
 * @returns {Array} list of question objects
 */
async function getQuestions() {
    const { rows } = await pool.query('SELECT * FROM questions;');
    
    return rows;
}

/**
 * 
 * @param {string} qid question id
 * @returns {Array} list of answer objects
 */
async function getAnswers(qid) {
    const { rows } = await pool.query('SELECT * FROM answers WHERE qid=$1;', [qid]);
    
    return rows;
}

module.exports = {
    getQuestions,
    getAnswers,
}
