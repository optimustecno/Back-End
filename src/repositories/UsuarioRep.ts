import { usuarios } from "../entities/Usuarios";
import { AppDataSource } from "../data-source";
export const UsuarioRep = AppDataSource.getRepository(usuarios).extend({});
