import { HTTPVerb, query, WILDERS_PATH } from '../../services/rest';
import { WilderType } from '../../types';

export async function createWilder(
  firstName: string,
  lastName: string,
  schoolName: string,
  skillsNames: string[]
): Promise<WilderType> {
  return query(WILDERS_PATH, HTTPVerb.POST, {
    firstName,
    lastName,
    schoolName,
    skillsNames,
  });
}
