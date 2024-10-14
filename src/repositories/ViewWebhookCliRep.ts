import { EntityRepository, Repository } from "typeorm";
import { ViewWebhookCli } from "../entities/ViewWebhookCliente";

@EntityRepository(ViewWebhookCli)
class ViewWebhookCliRep extends Repository<ViewWebhookCli> {}

export { ViewWebhookCliRep };
