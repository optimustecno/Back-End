import { EntityRepository, Repository } from "typeorm";
import { ViewSuporte } from "../entities/ViewSuportes";

@EntityRepository(ViewSuporte)
class ViewSuporteRep extends Repository<ViewSuporte> {}

export { ViewSuporteRep };
