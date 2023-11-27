import { EntityRepository, Repository } from "typeorm";
import { Pedidos } from "../entities/Pedidos";

@EntityRepository(Pedidos)
class PedidoRep extends Repository<Pedidos>{

}

export { PedidoRep }