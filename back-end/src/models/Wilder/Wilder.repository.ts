import { Repository } from "typeorm";
import Wilder from "./Wilder.entity";
import { getRepository } from "../../database/utils";
import School from "../School/School.entity";
import SchoolRepository from "../School/School.repository";
import Skill from "../Skill/Skill.entity";
import SkillRepository from "../Skill/Skill.repository";

export default class WilderRepository extends Wilder {
  private static repository: Repository<Wilder>;
  static async initializeRepository() {
    this.repository = await getRepository(Wilder);
  }

  static async clearRepository(): Promise<void> {
    this.repository.clear();
  }

  static async initializeWilders(): Promise<void> {
    await this.clearRepository();
    const lyonSchool = (await SchoolRepository.getSchoolByName(
      "Lyon"
    )) as School;
    const javaScriptSkill = (await SkillRepository.getSkillByName(
      "JavaScript"
    )) as Skill;
    const phpSkill = (await SkillRepository.getSkillByName("PHP")) as Skill;

    const jean = new Wilder("Jean", "Wilder", lyonSchool, [javaScriptSkill]);
    const jeanne = new Wilder("Jeanne", "Wilder", lyonSchool, [
      javaScriptSkill,
      phpSkill,
    ]);

    await this.repository.save([jean, jeanne]);
  }

  static async getWilders(): Promise<Wilder[]> {
    return this.repository.find();
  }

  static async createWilder(
    firstName: string,
    lastName: string
  ): Promise<Wilder> {
    const newWilder = this.repository.create({ firstName, lastName });
    await this.repository.save(newWilder);
    return newWilder;
  }

  static async updateWilder(
    id: string,
    firstName: string,
    lastName: string
  ): Promise<
    {
      id: string;
      firstName: string;
      lastName: string;
    } & Wilder
  > {
    const existingWilder = await this.repository.findOneBy({ id });
    if (!existingWilder) {
      throw Error("No existing Wilder matching ID.");
    }
    return this.repository.save({
      id,
      firstName,
      lastName,
    });
  }

  static async deleteWilder(id: string): Promise<Wilder> {
    const existingWilder = await this.repository.findOneBy({ id });
    if (!existingWilder) {
      throw Error("No existing Wilder matching ID.");
    }
    return this.repository.remove(existingWilder);
  }

  static async addSkillToWilder(
    wilderId: string,
    skillId: string
  ): Promise<Wilder> {
    const wilder = await this.repository.findOneBy({ id: wilderId });
    if (!wilder) {
      throw Error("No existing Wilder matching ID.");
    }
    const skill = await SkillRepository.getSkillById(skillId);
    if (!skill) {
      throw Error("No existing skill matching ID.");
    }
    wilder.skills = [...wilder.skills, skill];
    return this.repository.save(wilder);
  }
}