import { EntityRepository, Repository } from "typeorm";
import { Setor } from "../entities/Setores";

@EntityRepository(Setor)
class SetorRep extends Repository<Setor> {}

export { SetorRep };
