import { Clientes } from "../entities/Cliente";
import { AppDataSource } from "../data-source";
export const ClientesRep = AppDataSource.getRepository(Clientes).extend({});
