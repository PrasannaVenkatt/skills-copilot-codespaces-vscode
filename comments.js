// create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// create a response
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// use body-parser
app.use(bodyParser.json());

// create a route for POST request
app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('POST request to the homepage');
});

// start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
