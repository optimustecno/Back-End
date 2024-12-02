import { EntityRepository, Repository } from "typeorm";
import { ViewGruposAdd } from "../entities/ViewGruposAdicionais";

@EntityRepository(ViewGruposAdd)
class ViewGruposAddRep extends Repository<ViewGruposAdd> {}

export { ViewGruposAddRep };
