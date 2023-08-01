import { EntityRepository, Repository } from "typeorm";
import { Financeiro } from "../entities/Financeiro";

@EntityRepository(Financeiro)
class FinanceiroRep extends Repository<Financeiro> {}

export { FinanceiroRep };
