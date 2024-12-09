import { EntityRepository, Repository } from "typeorm";
import { ViewLinkGrupos } from "../entities/ViewLinkGrupos";

@EntityRepository(ViewLinkGrupos)
class ViewLinkGruposRep extends Repository<ViewLinkGrupos>{

}

export { ViewLinkGruposRep }