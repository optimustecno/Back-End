import { Convidados } from "../entities/Convidados";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Convidados)
class ConvidadosRep extends Repository<Convidados>{

}

export { ConvidadosRep }