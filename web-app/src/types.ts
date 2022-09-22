export type SchoolType = {
    id: string;
    schoolName: string;
  };
  
  export type SkillType = {
    id: string;
    skillName: string;
  };
  
  export type WilderType = {
    id: string;
    firstName: string;
    lastName: string;
    school: SchoolType[];
    skills: SkillType[];
  };