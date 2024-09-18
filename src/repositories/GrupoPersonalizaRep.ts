import { EntityRepository, Repository } from "typeorm";
import { GrupoPersonalizacao } from "../entities/GrupoPersonalizacao";

@EntityRepository(GrupoPersonalizacao)
class GrupoPersonalizaRep extends Repository<GrupoPersonalizacao>{

}

export { GrupoPersonalizaRep }