import { ICompetitionEntity } from 'store/reducers/competitions.reducer';
import { trophyCompetitionsData2025_1 } from './trophy-competitions/2025_01.data';

export const trophyCompetitionsData: { [id: string]: ICompetitionEntity } = {
  ...trophyCompetitionsData2025_1,
};
