import { Clientes } from "../entities/Clientes";
import { AppDataSource } from "../data-source";
export const ClientesRep = AppDataSource.getRepository(Clientes).extend({});
