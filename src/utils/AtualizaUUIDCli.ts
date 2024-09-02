import { v4 as Uuidv4 } from "uuid";
import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../repositories/ClienteRep"; 

//NEGAR ACESSO 403
interface iCliente {
    opt_cod_cliente: string;
}

class AtualizaUUID {
    async execute({ opt_cod_cliente }: iCliente) {
        const clientesRep = getCustomRepository(ClientesRep);
        const ClientesCad = await clientesRep.findOne({
            opt_cod_cliente,
        });

        if (!ClientesCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }
        if (!ClientesCad.opt_uid_cli){
            const Uid = Uuidv4();
            const _cliente = await clientesRep.update(
                { opt_cod_cliente: opt_cod_cliente },
                {
                    opt_uid_cli: Uid,
                }
            );
        }
        return "";
    }
}

export { AtualizaUUID };
