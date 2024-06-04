import { EntityRepository, Repository } from "typeorm";
import { ViewContatos } from "../entities/ViewContaos";

@EntityRepository(ViewContatos)
class ViewContatosRep extends Repository<ViewContatos> {}

export { ViewContatosRep };
