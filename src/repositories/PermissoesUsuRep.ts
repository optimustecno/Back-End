import { PermissoesUsuarios } from "../entities/PermissoesUsuarios";
import { AppDataSource } from "../data-source";
export const PermissoesUsuRep = AppDataSource.getRepository(
	PermissoesUsuarios
).extend({});
