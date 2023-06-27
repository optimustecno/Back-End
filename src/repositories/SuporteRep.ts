import { EntityRepository, Repository } from "typeorm";
import { Suporte } from "../entities/Suportes";

@EntityRepository(Suporte)
class SuporteRep extends Repository<Suporte> {}

export { SuporteRep };
