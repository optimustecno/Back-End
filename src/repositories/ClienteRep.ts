import { EntityRepository, Repository } from "typeorm";
import { Clientes } from "../entities/Cliente";

@EntityRepository(Clientes)
class ClientesRep extends Repository<Clientes> {}

export { ClientesRep };
