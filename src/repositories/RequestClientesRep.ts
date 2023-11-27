import { RequestClientes } from "../entities/RequestClientes";
import { AppDataSource } from "../data-source";
export const RequestClientesRep = AppDataSource.getRepository(
	RequestClientes
).extend({});
