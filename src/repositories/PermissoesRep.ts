import { EntityRepository, Repository } from "typeorm";
import { Permissoes } from "../entities/Permissoes";

@EntityRepository(Permissoes)
class PermissoesRep extends Repository<Permissoes> {}

export { PermissoesRep };
