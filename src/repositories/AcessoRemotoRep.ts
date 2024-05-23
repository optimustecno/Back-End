import { EntityRepository, Repository } from "typeorm";
import { AcessoRemoto } from "../entities/AcessoRemoto";

@EntityRepository(AcessoRemoto)
class AcessoRemotoRep extends Repository<AcessoRemoto>{

}

export { AcessoRemotoRep }