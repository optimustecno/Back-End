import { EntityRepository, Repository } from "typeorm";
import { NotasVersao } from "../entities/NotasVersao";

@EntityRepository(NotasVersao)
class NotasVersaoRep extends Repository<NotasVersao>{

}

export { NotasVersaoRep }