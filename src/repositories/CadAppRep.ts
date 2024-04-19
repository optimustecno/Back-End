import { CadApp } from "../entities/CadApp";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(CadApp)
class CadAppRep extends Repository<CadApp>{

}

export { CadAppRep }