import { EntityRepository, Repository } from "typeorm";
import { usuarios } from "../entities/Usuarios";

@EntityRepository(usuarios)
class UsuarioRep extends Repository<usuarios>{

}

export { UsuarioRep }

