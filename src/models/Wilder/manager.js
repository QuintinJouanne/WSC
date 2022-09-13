const { getDatabase } = require("../../database/utils");
const Wilder = require("./index");

async function initializeWilders() {
  const wilderRepository = (await getDatabase()).getRepository(Wilder);
  await wilderRepository.clear();
  await wilderRepository.save({ name: "Jean Wilder" });
}

async function getWilders() {
  const wilderRepository = (await getDatabase()).getRepository(Wilder);
  return wilderRepository.find()
}

async function createWilder() {
  return;
}

module.exports = {
  initializeWilders,
  createWilder,
  getWilders,
};