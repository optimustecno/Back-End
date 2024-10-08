import { CadWebhook } from "../entities/CadWebhook";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(CadWebhook)
class CadWebhookRep extends Repository<CadWebhook>{

}

export { CadWebhookRep }