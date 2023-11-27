import { Contrato } from "../entities/Contrato";
import { AppDataSource } from "../data-source";
export const ContratoRep = AppDataSource.getRepository(Contrato).extend({});
