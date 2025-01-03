import { ICompetitionEntity } from 'store/reducers/competitions.reducer';
import { competitionsData2017 } from './competitions/2017.data';
import { competitionsData2018 } from './competitions/2018.data';
import { competitionsData2019 } from './competitions/2019.data';
import { competitionsData2020 } from './competitions/2020.data';
import { competitionsData2021 } from './competitions/2021.data';
import { competitionsData2022 } from './competitions/2022.data';
import { competitionsData2023 } from './competitions/2023.data';
import { competitionsData2024 } from './competitions/2024.data';
import { competitionsData2025 } from './competitions/2025.data';

export const competitionsData: { [id: string]: ICompetitionEntity } = {
  ...competitionsData2017,
  ...competitionsData2018,
  ...competitionsData2019,
  ...competitionsData2020,
  ...competitionsData2021,
  ...competitionsData2022,
  ...competitionsData2023,
  ...competitionsData2024,
  ...competitionsData2025,
};
