import { EntityRepository, Repository } from "typeorm";
import { ProdutosCardapio } from "../entities/ProdutosCardapio";

@EntityRepository(ProdutosCardapio)
class ProdCardapioRep extends Repository<ProdutosCardapio>{

}

export { ProdCardapioRep }