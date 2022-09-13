const express = require('express');
const wildersControllers = require('./controller/wilders')
const { get } = require('./controller/wilders');
const { initializeWilders } = require('./models/Wilder/manager');


const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get("/wilders", get);

const PORT = 4000;

async function start() {
  await initializeWilders();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
};

start();


