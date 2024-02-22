import { EntityRepository, Repository } from "typeorm";
import { CardapioClientes } from "../entities/CardapioClientes";

@EntityRepository(CardapioClientes)
class CardapioCliRep extends Repository<CardapioClientes>{

}

export { CardapioCliRep }