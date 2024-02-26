import { EntityRepository, Repository } from "typeorm";
import { ViewGruposProdutos } from "../entities/ViewGrupos";

@EntityRepository(ViewGruposProdutos)
class ViewGruposProdRep extends Repository<ViewGruposProdutos> {}

export { ViewGruposProdRep };
