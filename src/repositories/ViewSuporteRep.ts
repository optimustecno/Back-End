import { ViewSuporte } from "../entities/ViewSuportes";
import { AppDataSource } from "../data-source";
export const ViewSuporteRep = AppDataSource.getRepository(ViewSuporte).extend({})
