import { ViewEmpLink } from "../entities/view_emp_link";
import { AppDataSource } from "../data-source";
export const ViewEmpLinkRep = AppDataSource.getRepository(ViewEmpLink).extend(
	{}
);
