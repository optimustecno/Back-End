import { EntityRepository, Repository } from "typeorm";
import { Loggerwebhook } from "../entities/LoggerWeebhook";

@EntityRepository(Loggerwebhook)
class LoggerwebhookRep extends Repository<Loggerwebhook>{

}

export { LoggerwebhookRep }