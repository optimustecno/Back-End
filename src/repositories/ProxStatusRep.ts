import { EntityRepository, Repository } from "typeorm";
import { PedidosProxStatus } from "../entities/ProxStatus";

@EntityRepository(PedidosProxStatus)
class ProxStatusRep extends Repository<PedidosProxStatus>{

}

export { ProxStatusRep }