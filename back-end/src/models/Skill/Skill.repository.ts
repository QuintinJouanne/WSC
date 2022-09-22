import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Skill from "./Skill.entity";

export default class SkillRepository extends Skill {
  private static repository: Repository<Skill>;
  static async initializeRepository() {
    this.repository = await getRepository(Skill);
  }

  static async clearRepository(): Promise<void> {
    this.repository.clear();
  }

  static async initializeSkills() {
    this.clearRepository();
    await this.repository.save({
      skillName: "PHP",
    });
    await this.repository.save({
      skillName: "JavaScript",
    });
  }


  static async getSkills(): Promise<Skill[]> {
    return this.repository.find();
  }


  static async createSkill(
    skillName: string,
  ): Promise<Skill> {
    const newSkill = this.repository.create({ skillName });
    await this.repository.save(newSkill);
    return newSkill;
  }

  static async getSkillByName(name: string): Promise<Skill | null> {
    return this.repository.findOneBy({ skillName: name });
  }

  static async getSkillById(id: string): Promise<Skill | null> {
    return this.repository.findOneBy({ id });
  }
}