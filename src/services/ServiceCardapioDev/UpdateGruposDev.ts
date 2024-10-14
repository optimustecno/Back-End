import { iCliGrupos } from "./interfaces"
import { getCustomRepository } from "typeorm";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";
import { AtivaWebhook } from "./AtivaWebhook";

class UpdateGrupoDev {
    async execute({
        seq,
        opt_cod_cliente,
        cod_grupo,
        nome_grupo,
        aceita_meio_a_meio,
        preco,
        ordem,
        exibir,
    }: iCliGrupos) {
        const gruposRep = getCustomRepository(GrupoProdRep);

        if (!opt_cod_cliente) {
            throw new Error("Não Foi Informado o Código de Cliente!");
        }
        if (!cod_grupo) {
            throw new Error("Não Foi Informado o Código do Grupo!");
        }
        if (!nome_grupo) {
            throw new Error("Não Foi Informado o Nome do Grupo!");
        }

        const _grupo = await gruposRep.update(
            { seq },
            {
                opt_cod_cliente,
                cod_grupo,
                nome_grupo,
                aceita_meio_a_meio,
                preco,
                ordem,
                exibir,
            }
        );

        try{
            const atGrupo = await gruposRep.findOne({seq})
            const disparoWebhook = new AtivaWebhook();
            const webhook = await disparoWebhook.execute({
                opt_cod_cliente, 
                opt_finalidade: "1",
                Data: JSON.parse(JSON.stringify(atGrupo))
            })
            return _grupo;
        }
        catch{
            throw new Error("Falha no Webhook");
        }
    }
}

export { UpdateGrupoDev };
