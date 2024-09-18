import { EntityRepository, Repository } from "typeorm";
import { ViewVinculos } from "../entities/ViewVinculos";

@EntityRepository(ViewVinculos)
class ViewVinculosRep extends Repository<ViewVinculos> {}

export { ViewVinculosRep };
