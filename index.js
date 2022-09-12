const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

const PORT = 4000;
app.listen(4000, () => {
    console.log(`Server is running on port ${PORT}`)
});