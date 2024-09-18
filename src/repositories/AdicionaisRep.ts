import { EntityRepository, Repository } from "typeorm";
import { AdicionaisCardapio } from "../entities/AdicionaisCardapio";

@EntityRepository(AdicionaisCardapio)
class AdicionaisRep extends Repository<AdicionaisCardapio>{

}

export { AdicionaisRep }