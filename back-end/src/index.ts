import express from 'express';
import * as wildersControllers from './controllers/wilders';
import * as schoolsControllers from './controllers/school';
import SchoolRepository from './models/School/School.repository';
import SkillRepository from './models/Skill/Skill.repository';
import WilderRepository from './models/Wilder/Wilder.repository';

const app = express();
const PORT = 4000;
const WILDERS_PATH = '/wilders';
const SCHOOLS_PATH = '/schools';

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello world from Express!');
});

// Wilders Routes

app.get(WILDERS_PATH, wildersControllers.get);
app.post(WILDERS_PATH, wildersControllers.post);
app.put(`${WILDERS_PATH}/:id`, wildersControllers.put);
app.delete(`${WILDERS_PATH}/:id`, wildersControllers.del);
app.post(`${WILDERS_PATH}/:id/skills`, wildersControllers.addSkill);

// Schools Routes

app.get(SCHOOLS_PATH, schoolsControllers.get);
app.post(SCHOOLS_PATH, schoolsControllers.post);
app.delete(`${SCHOOLS_PATH}/:id`, schoolsControllers.del);

async function start() {
  await SkillRepository.initializeRepository();
  await SchoolRepository.initializeRepository();
  await WilderRepository.initializeRepository();

  await SkillRepository.initializeSkills();
  await SchoolRepository.initializeSchools();
  await WilderRepository.initializeWilders();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 👍`);
  });
}

start();
