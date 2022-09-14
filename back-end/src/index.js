const express = require("express");
const wildersControllers = require("./controllers/wilders");
const { getDatabase } = require("./database/utils");
const { initializeSchools } = require("./models/School/manager");
const { initializeSkills } = require("./models/Skill/manager");
const { initializeWilders } = require("./models/Wilder/manager");

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello world from Express!");
});

const WILDERS_PATH = "/wilders";
app.get(WILDERS_PATH, wildersControllers.get);
app.post(WILDERS_PATH, wildersControllers.post);
app.put(`${WILDERS_PATH}/:id`, wildersControllers.put);
app.delete(`${WILDERS_PATH}/:id`, wildersControllers.remove);
app.post(`${WILDERS_PATH}/:id/skills`, wildersControllers.addSKill);

const PORT = 4000;

async function start() {
  await initializeSkills();
  await initializeSchools();
  await initializeWilders();
  await getDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 👍`);
  });
}

start();