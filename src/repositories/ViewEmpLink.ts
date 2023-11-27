import { EntityRepository, Repository } from "typeorm";
import { ViewEmpLink } from "../entities/view_emp_link";

@EntityRepository(ViewEmpLink)
class ViewEmpLinkRep extends Repository<ViewEmpLink> {}

export { ViewEmpLinkRep };
