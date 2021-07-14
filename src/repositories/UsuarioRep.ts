import { EntityRepository, Repository } from "typeorm";
import { Usuarios } from "../entities/Usuarios";

@EntityRepository(Usuarios)
class UsuarioRep extends Repository<Usuarios>{

}

export { UsuarioRep }

