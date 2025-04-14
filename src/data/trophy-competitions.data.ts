import { ICompetitionEntity } from 'store/reducers/competitions.reducer';
import { trophyCompetitionsDataSpring2025 } from './trophy-competitions/spring-2025.data';

export const trophyCompetitionsData: { [id: string]: ICompetitionEntity } = {
  ...trophyCompetitionsDataSpring2025,
};
