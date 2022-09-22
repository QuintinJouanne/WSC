import { HTTPVerb, query, WILDERS_PATH } from "../../services/rest";

export type SchoolType = {
  id: string;
  schoolName: string;
}

export type SkillType = {
  skillName: string;
  id: string;
  firstName: string;
  lastName: string;
}

export type WilderType = {
  id: string;
  firstName: string;
  lastName: string;
  school: SchoolType[];
  skills: SkillType[];
}


export async function fetchWilders(): Promise<WilderType[]> {
  return query(WILDERS_PATH, HTTPVerb.GET);
}