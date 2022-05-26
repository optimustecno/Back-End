import { EntityRepository, Repository } from "typeorm";
import { RequestClientes } from "../entities/RequestClientes";

@EntityRepository(RequestClientes)
class RequestClientesRep extends Repository<RequestClientes>{

}

export { RequestClientesRep }