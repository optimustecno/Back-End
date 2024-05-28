import { Mensagens } from "../entities/Mensagem";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Mensagens)
class MensagensRep extends Repository<Mensagens> {
    
}

export { MensagensRep };
