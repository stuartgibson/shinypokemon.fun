import { ICompetitionEntity } from 'store/reducers/competitions.reducer';

export const trophyCompetitionsData2025_1: {
  [id: string]: ICompetitionEntity;
} = {
  'f507698b-f438-4e76-8252-abe87de4fc0c': {
    data: {
      type: 'competition',
      id: 'f507698b-f438-4e76-8252-abe87de4fc0c',
      attributes: {
        description: 'Details for the first fortnight',
        endDate: '2025-04-27',
        startDate: '2025-04-14',
        theme: 'Spring 2025 01',
      },
      relationships: {
        selectedBy: {
          data: {
            id: 'dc7bd870-037f-45d8-bf8d-3e98a361cf49',
            type: 'player',
          },
        },
        validPokemon: [],
        year: {
          data: {
            id: '2025_1',
            type: 'year',
          },
        },
      },
    },
  },
};
