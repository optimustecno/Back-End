import { EntityRepository, Repository } from "typeorm";
import { LinkGrupoPersonalizacao } from "../entities/LinkGrupoPersonalizacao";

@EntityRepository(LinkGrupoPersonalizacao)
class LinkGrupoPersonalizaRep extends Repository<LinkGrupoPersonalizacao>{

}

export { LinkGrupoPersonalizaRep }