import { EntityRepository, Repository } from "typeorm";
import { Cargos } from "../entities/Cargos";

@EntityRepository(Cargos)
class CargosRep extends Repository<Cargos> {}

export { CargosRep };
