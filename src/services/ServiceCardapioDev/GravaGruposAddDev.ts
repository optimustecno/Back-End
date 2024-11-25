import { iCliGrupoAdd } from "./interfaces";
import { AtivaWebhook } from "./AtivaWebhook";
import { getCustomRepository } from "typeorm";
import { Espera } from "../../utils/functions";
import { GrupoPersonalizaRep } from "../../repositories/GrupoPersonalizaRep";

class GravaGruposAddDev {
    async execute({
        opt_cod_cliente,
        cod_grupo,
        nome,
        cod_grupo_adicional,
        exibir
    }: iCliGrupoAdd) {
        const gruposRep = getCustomRepository(GrupoPersonalizaRep);

        if (!opt_cod_cliente) {
            throw new Error("Não Foi Informado o Código de Cliente!");
        }
        if (!cod_grupo) {
            throw new Error("Não Foi Informado o Código do Grupo!");
        }
        if (!cod_grupo_adicional) {
            throw new Error("Não Foi Informado o Código do Grupo Adicional!");
        }
        if (!nome) {
            throw new Error("Não Foi Informado o Nome do Grupo de Adicionais!");
        }

        const TestaCad = await gruposRep.findOne({
            opt_cod_cliente,
            cod_grupo_adicional,
            cod_grupo
        });

        if (TestaCad) {
            throw new Error("Grupo de Adicionais Existente!");
        }

        const _grupo = await gruposRep.create({
            opt_cod_cliente,
            cod_grupo,
            nome,
            cod_grupo_adicional,
            exibir
        });

        await gruposRep.save(_grupo);

        Espera(150);

        const grupoCad = await gruposRep.findOne({
            opt_cod_cliente,
            cod_grupo_adicional
        });
        
        try{
            const disparoWebhook = new AtivaWebhook();
            const webhook = await disparoWebhook.execute({
                opt_cod_cliente, 
                opt_finalidade: "3",
                Data: JSON.parse(JSON.stringify(grupoCad))
            })
            
            return grupoCad.seq;
        }
        catch{
            throw new Error("Falha no Webhook");
        }
    }
}

export { GravaGruposAddDev };
