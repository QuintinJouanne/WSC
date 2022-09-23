import { Repository } from 'typeorm';
import Skill from './Skill.entity';
import { getRepository } from '../../database/utils';

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
      skillName: 'PHP',
    });
    await this.repository.save({
      skillName: 'JavaScript',
    });
    await this.repository.save({
      skillName: 'Python',
    });
    await this.repository.save({
      skillName: 'CSS',
    });
    await this.repository.save({
      skillName: 'HTML',
    });
    await this.repository.save({
      skillName: 'SQL',
    });
  }

  static async getSkillByName(name: string): Promise<Skill | null> {
    return this.repository.findOneBy({ skillName: name });
  }

  static async getSkillById(id: string): Promise<Skill | null> {
    return this.repository.findOneBy({ id });
  }
}
