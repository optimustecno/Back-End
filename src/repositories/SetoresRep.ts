import { Setor } from "../entities/Setores";
import { AppDataSource } from "../data-source";
export const SetorRep = AppDataSource.getRepository(Setor).extend({});
