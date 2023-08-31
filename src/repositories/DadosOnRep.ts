import { EntityRepository, Repository } from "typeorm";
import { DadosOn } from "../entities/EmpresasClientes";

@EntityRepository(DadosOn)
class DadosOnRep extends Repository<DadosOn>{

}

export { DadosOnRep }