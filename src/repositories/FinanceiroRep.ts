import { Financeiro } from "../entities/Financeiro";
import { AppDataSource } from "../data-source";
export const FinanceiroRep = AppDataSource.getRepository(Financeiro).extend({});
