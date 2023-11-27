
import { Suporte } from "../entities/Suportes";

import { AppDataSource } from "../data-source";
export const SuporteRep = AppDataSource.getRepository(Suporte).extend({});