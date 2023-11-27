import { usuario } from "../entities/Usuario";

import { AppDataSource } from "../data-source";
export const UserRep = AppDataSource.getRepository(usuario).extend({});
