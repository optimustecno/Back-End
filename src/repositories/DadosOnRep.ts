import { DadosOn } from "../entities/EmpresasClientes";
import { AppDataSource } from "../data-source";
export const DadosOnRep = AppDataSource.getRepository(DadosOn).extend({});
