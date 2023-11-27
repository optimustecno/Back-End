import { EntityRepository, Repository } from "typeorm";
import { Clientes } from "../entities/Clientes";

@EntityRepository(Clientes)
class ClientesRep extends Repository<Clientes> {}

export { ClientesRep };
