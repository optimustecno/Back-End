import { EntityRepository, Repository } from "typeorm";
import { usuario_suporte } from "../entities/UsuarioSuporte";

@EntityRepository(usuario_suporte)
class UserSuporteRep extends Repository<usuario_suporte> {}

export { UserSuporteRep };
