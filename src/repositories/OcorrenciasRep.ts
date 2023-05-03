import { EntityRepository, Repository } from "typeorm";
import { Ocorrencias } from "../entities/Ocorrencias";

@EntityRepository(Ocorrencias)
class OcorrenciasRep extends Repository<Ocorrencias> {}

export { OcorrenciasRep };
