const {
  getWilders,
  createWilder,
  updateWilder,
  deleteWilder,
  addSkillToWilder,
} = require("../models/Wilder/manager");

const get = async (req, res) => {
  const wilders = await getWilders();
  res.json(wilders);
};

const post = async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    res.status(400).json({ error: "First name and last name are mandatory." });
  } else {
    const newWilder = await createWilder(firstName, lastName);
    res.status(201).json(newWilder);
  }
};

const put = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    res.status(400).json({ error: "First name and last name are mandatory." });
  } else {
    try {
      const updatedWilder = await updateWilder(id, firstName, lastName);
      res.json(updatedWilder);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteWilder(id);
    res.json({ message: `Wilder ${id} has been successfully removed.` });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const addSKill = async (req, res) => { 
  const { id: wilderId } = req.params;
  const { skillId } = req.body;

  if (!skillId) {
    res.status(400).json({ error: "Skill ID is mandatory"})
  } else {
    try {
      const updateWilder = await addSkillToWilder(wilderId, skillId);
      res.json(updateWilder);
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
 }

module.exports = {
  get,
  post,
  put,
  remove,
  addSKill,
};
