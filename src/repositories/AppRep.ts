import { Apps } from "../entities/Apps";
import { AppDataSource } from "../data-source";
export const AppRep = AppDataSource.getRepository(Apps).extend({});
