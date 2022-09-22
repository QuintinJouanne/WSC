import { Request, Response } from "express";
import SkillRepository from "../models/Skill/Skill.repository";


const get = async (req: Request, res: Response): Promise<void> => {
  const skills = await SkillRepository.getSkills();
  res.json(skills);
};

const post = async (req: Request, res: Response): Promise<void> => {
  const { skillName } = req.body;
  if (!skillName) {
    res.status(400).json({ error: "Skillname is mandatory." });
  } else {
    const newSkill = await SkillRepository.createSkill(skillName);
    res.status(201).json(newSkill);
  }
};


export { get,post };