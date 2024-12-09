import { EntityRepository, Repository } from "typeorm";
import { ViewAdicionaisCardapio } from "../entities/ViewAdicionais";

@EntityRepository(ViewAdicionaisCardapio)
class ViewAddRep extends Repository<ViewAdicionaisCardapio>{

}

export { ViewAddRep }