import express from "express";

import * as wildersControllers from "./controllers/wilders";
import School from "./models/School/School.repository";
import Skill from "./models/Skill/Skill.repository";
import Wilder from "./models/Wilder/Wilder.repository";

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello world from Express!");
});

const WILDERS_PATH = "/wilders";
app.get(WILDERS_PATH, wildersControllers.get);
app.post(WILDERS_PATH, wildersControllers.post);
app.put(`${WILDERS_PATH}/:id`, wildersControllers.put);
app.delete(`${WILDERS_PATH}/:id`, wildersControllers.del);
app.post(`${WILDERS_PATH}/:id/skills`, wildersControllers.addSkill);

const PORT = 4000;

async function start() {
  await Skill.initializeRepository();
  await School.initializeRepository();
  await Wilder.initializeRepository();

  await Skill.initializeSkills();
  await School.initializeSchools();
  await Wilder.initializeWilders();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 👍`);
  });
}

start();