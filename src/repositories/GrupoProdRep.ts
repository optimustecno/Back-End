import { EntityRepository, Repository } from "typeorm";
import { GrupoProdutos } from "../entities/GrupoProdutos";

@EntityRepository(GrupoProdutos)
class GrupoProdRep extends Repository<GrupoProdutos>{

}

export { GrupoProdRep }