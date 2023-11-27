import { usuario_suporte } from "../entities/UsuarioSuporte";

import { AppDataSource } from "../data-source";
export const UserSuporteRep = AppDataSource.getRepository(
	usuario_suporte
).extend({});
