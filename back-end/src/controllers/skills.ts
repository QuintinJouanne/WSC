import { Request, Response } from "express";
import SkillRepository from "../models/Skill/Skill.repository";


const get = async (req: Request, res: Response): Promise<void> => {
  const skills = await SkillRepository.getSkills();
  res.json(skills);
};


export { get };