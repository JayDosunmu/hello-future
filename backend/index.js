// JS stdlib
const path = require('path');
// Installed dependencies
const express = require('express');

const {
    getAnswers,
    getQuestions,
} = require('./queries');

const app = express();
const api = express.Router();

app.use(express.static(path.join(
    __dirname,
    '..',
    'frontend',
    'build'
)));
app.use('/api', api);

api.get('/questions', async (req, res) => {
    // get all questions
    res.json(await getQuestions());
});

api.get('/answers/:questionId', async (req, res) => {
    // get the answers associated with a question
    try {
        const qId = parseInt(req.params.questionId, 10);
        res.json(await getAnswers(qId));
    } catch (err) {
        res.status(400).json('Invalid value provided for questionId -- it must be an int');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(
        __dirname,
        '..',
        'frontend',
        'build',
        'index.html'
    ));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Hello-Future app listening on ${port}`);