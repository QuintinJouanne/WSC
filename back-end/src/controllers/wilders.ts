import WilderRepository from '../models/Wilder/Wilder.repository';
import { Request, Response } from 'express';
import { getErrorMessage } from '../utils';
import Wilder from '../models/Wilder/Wilder.entity';

const get = async (req: Request, res: Response): Promise<void> => {
  const wilders = await WilderRepository.getWilders();
  res.json(wilders);
};

const post = async (req: Request, res: Response): Promise<void> => {
  const { firstName, lastName, schoolName, skillsNames } = req.body;
  if (!firstName || !lastName || !lastName || !skillsNames === null) {
    console.error(req.body);
    res.status(400).json({ error: 'First name and last name are mandatory.' });
  } else {
    console.log({ skillsNames: skillsNames });
    const newWilder = await WilderRepository.createWilder(
      firstName,
      lastName,
      schoolName,
      skillsNames
    );
    res.status(201).json(newWilder);
  }
};

const put = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    res
      .status(400)
      .json({ error: 'ID, first name and last name are mandatory.' });
  } else {
    try {
      const updatedWilder = await WilderRepository.updateWilder(
        id,
        firstName,
        lastName
      );
      res.json(updatedWilder);
    } catch (error) {
      res.status(404).json({ error: getErrorMessage(error) });
    }
  }
};

const del = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await WilderRepository.deleteWilder(id);
    res.json({ message: `Wilder ${id} has been successfully removed.` });
  } catch (error) {
    res.status(404).json({ error: getErrorMessage(error) });
  }
};

const addSkill = async (req: Request, res: Response): Promise<void> => {
  const { id: wilderId } = req.params;
  const { skillId } = req.body;

  if (!skillId) {
    res.status(400).json({ error: 'Skill ID is mandatory.' });
  } else {
    try {
      const updatedWilder = await WilderRepository.addSkillToWilder(
        wilderId,
        skillId
      );
      res.json(updatedWilder);
    } catch (error) {
      res.status(404).json({ error: getErrorMessage(error) });
    }
  }
};

export { get, post, put, del, addSkill };
