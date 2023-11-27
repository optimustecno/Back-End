import { PedidosProxStatus } from "../entities/ProxStatus";
import { AppDataSource } from "../data-source";
export const ProxStatusRep = AppDataSource.getRepository(
	PedidosProxStatus
).extend({});
