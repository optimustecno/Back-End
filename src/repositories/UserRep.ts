import { EntityRepository, Repository } from "typeorm";
import { usuario } from "../entities/Usuario";

@EntityRepository(usuario)
class UserRep extends Repository<usuario> {}

export { UserRep };
