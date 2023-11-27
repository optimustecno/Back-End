import { Permissoes } from "../entities/Permissoes";
import { AppDataSource } from "../data-source";
export const PermissoesRep = AppDataSource.getRepository(Permissoes).extend({});
