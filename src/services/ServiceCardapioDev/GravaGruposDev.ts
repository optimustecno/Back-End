import { iCliGrupos } from "./interfaces";
import { AtivaWebhook } from "./AtivaWebhook";
import { getCustomRepository } from "typeorm";
import { Espera } from "../../utils/functions";
import { GrupoProdRep } from "../../repositories/GrupoProdRep";

class GravaGruposDev {
    async execute({
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

        const TestaCad = await gruposRep.findOne({
            opt_cod_cliente,
            cod_grupo
        });

        if (TestaCad) {
            throw new Error("Grupo Existente!");
        }

        const _grupo = await gruposRep.create({
            opt_cod_cliente,
            cod_grupo,
            nome_grupo,
            aceita_meio_a_meio,
            preco,
            ordem,
            exibir,
        });

        await gruposRep.save(_grupo);

        Espera(150);

        const grupoCad = await gruposRep.findOne({
            opt_cod_cliente,
            cod_grupo
        });
        
        try{
            const disparoWebhook = new AtivaWebhook();
            const webhook = await disparoWebhook.execute({
                opt_cod_cliente, 
                opt_finalidade: "1",
                Data: JSON.parse(JSON.stringify(grupoCad))
            })
            
            return grupoCad.seq;
        }
        catch{
            throw new Error("Falha no Webhook");
        }
    }
}

export { GravaGruposDev };
