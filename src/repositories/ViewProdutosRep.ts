import { EntityRepository, Repository } from "typeorm";
import { ViewProdutosCardapio } from "../entities/ViewProdutosCardapio";

@EntityRepository(ViewProdutosCardapio)
class ViewProdRep extends Repository<ViewProdutosCardapio>{

}

export { ViewProdRep }