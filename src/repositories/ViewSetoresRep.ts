import { EntityRepository, Repository } from "typeorm";
import { ViewSetores } from "../entities/ViewSetores";

@EntityRepository(ViewSetores)
class ViewSetoresRep extends Repository<ViewSetores> {}

export { ViewSetoresRep };
