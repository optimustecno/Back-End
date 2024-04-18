import { EntityRepository, Repository } from "typeorm";
import { OcorrenciasTB } from "../entities/OcorrenciasTB";

@EntityRepository(OcorrenciasTB)
class OcorrenciasTBRep extends Repository<OcorrenciasTB> {}

export { OcorrenciasTBRep };
