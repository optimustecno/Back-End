import { EntityRepository, Repository } from "typeorm";
import { Contatos } from "../entities/Contatos";

@EntityRepository(Contatos)
class ContatosRep extends Repository<Contatos> {}

export { ContatosRep };
