const express = require('express');
const typeorm = require('typeorm');

const app = express();

const dataSource = new typeorm.DataSource({
  type:"sqlite",
  database:"wildersdb.sqlite",
  synchronize: true,
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

const PORT = 4000;

async function start() {
  await dataSource.initialize();
  app.listen(4000, () => {
    console.log(`Server is running on port ${PORT}`)
});
};

start();