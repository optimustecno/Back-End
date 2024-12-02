import { iCliGrupoAdd } from "./interfaces"
import { getCustomRepository } from "typeorm";
import { AtivaWebhook } from "./AtivaWebhook";
import { GrupoPersonalizaRep } from "../../repositories/GrupoPersonalizaRep"; 

class UpdateGrupoAdd {
    async execute({
        seq,
        opt_cod_cliente,
        cod_grupo,
        nome,
        exibir,
    }: iCliGrupoAdd) {
        const gruposRep = getCustomRepository(GrupoPersonalizaRep);

        if (!opt_cod_cliente) {
            throw new Error("Não Foi Informado o Código de Cliente!");
        }
        if (!cod_grupo) {
            throw new Error("Não Foi Informado o Código do Grupo!");
        }
        if (!nome) {
            throw new Error("Não Foi Informado o Nome do Grupo!");
        }

        const _grupo = await gruposRep.update(
            { seq },
            {
                opt_cod_cliente,
                cod_grupo,
                nome,
                exibir,
            }
        );

        try{
            const atGrupo = await gruposRep.findOne({seq})
            const disparoWebhook = new AtivaWebhook();
            const webhook = await disparoWebhook.execute({
                opt_cod_cliente, 
                opt_finalidade: "3",
                Data: JSON.parse(JSON.stringify(atGrupo))
            })
            return _grupo;
        }
        catch{
            throw new Error("Falha no Webhook");
        }
    }
}

export { UpdateGrupoAdd };
