import { EntityRepository, Repository } from "typeorm";
import { Contrato } from "../entities/Contrato";

@EntityRepository(Contrato)
class ContratoRep extends Repository<Contrato> {}

export { ContratoRep };
