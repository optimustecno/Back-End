import { ConvidadosClientes } from "../entities/ConvidadoCliente";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ConvidadosClientes)
class ConvidadosClientesRep extends Repository<ConvidadosClientes>{

}

export { ConvidadosClientesRep }