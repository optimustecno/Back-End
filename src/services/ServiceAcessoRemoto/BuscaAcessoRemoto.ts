import { getCustomRepository } from "typeorm";
import { AcessoRemotoRep } from "../../repositories/AcessoRemotoRep";

interface iAcesso {
    opt_cod_cli: string;
    seq?: string;
}

class ServiceConsultaAcesso {
    async execute({ opt_cod_cli, seq }: iAcesso) {
        const acessoRep = getCustomRepository(AcessoRemotoRep);
        var AcessoCli;
        if (!seq) {
            AcessoCli = await acessoRep.find({
                where: { opt_cod_cli, tipo: "A" },
            });
        } else {
            AcessoCli = await acessoRep.findOne({
                seq,
            });
        }

        return AcessoCli;
    }
}

export { ServiceConsultaAcesso };
