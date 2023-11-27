import { Pedidos } from "../entities/Pedidos";
import { AppDataSource } from "../data-source";
export const PedidoRep = AppDataSource.getRepository(Pedidos).extend({});
