// JS stdlib
const path = require('path');
// Installed dependencies
const express = require('express');

const app = express();

app.get('/questions', (req, res) => {
    // get a random question
    res.json('What is a question?');
});

app.get('/answers/:questionId', (req, res) => {
    // get the answers associated with a question
    res.json(['correct answer', 'incorrect answer 1', 'incorrect answer 2']);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Hello-Future app listening on ${port}`);