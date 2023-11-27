import { viewSistemas } from "../entities/ViewSistemas";
import { AppDataSource } from "../data-source";
export const SistemasRep = AppDataSource.getRepository(viewSistemas).extend({});
