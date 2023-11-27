import { EntityRepository, Repository } from "typeorm";
import { viewSistemas } from "../entities/ViewSistemas";

@EntityRepository(viewSistemas)
class SistemasRep extends Repository<viewSistemas> {}

export { SistemasRep };
