import { EntityRepository, Repository } from "typeorm";
import { ViewNotas } from "../entities/ViewNotas";

@EntityRepository(ViewNotas)
class ViewNotasRep extends Repository<ViewNotas> {}

export { ViewNotasRep };
