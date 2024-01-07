import { ICompetitionEntity } from "store/reducers/competitions.reducer";
import { competitionsData2022 } from "./competitions/2022.data";
import { competitionsData2023 } from "./competitions/2023.data";
import { competitionsData2024 } from "./competitions/2024.data";

export const competitionsData:{[id:string]:ICompetitionEntity} = {
  ...competitionsData2022,
  ...competitionsData2023,
  ...competitionsData2024,
}
