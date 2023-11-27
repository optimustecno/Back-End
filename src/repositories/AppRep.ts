import { EntityRepository, Repository } from "typeorm";
import { Apps } from "../entities/Apps";

@EntityRepository(Apps)
class AppRep extends Repository<Apps>{

}

export { AppRep }