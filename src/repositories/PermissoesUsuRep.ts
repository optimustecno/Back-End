import { EntityRepository, Repository } from "typeorm";
import { PermissoesUsuarios } from "../entities/PermissoesUsuarios";

@EntityRepository(PermissoesUsuarios)
class PermissoesUsuRep extends Repository<PermissoesUsuarios> {}

export { PermissoesUsuRep };
