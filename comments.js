//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get all comments
app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

//add comment
app.post('/comments', (req, res) => {
    fs.readFile('./comments.json', (err, data) => {
        if (err) throw err;

        const comments = JSON.parse(data);
        const newComment = {
            id: comments.length + 1,
            name: req.body.name,
            comment: req.body.comment,
            date: new Date()
        };
    });
});


