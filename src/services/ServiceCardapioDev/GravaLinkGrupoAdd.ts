import { iLinkGrupoAdd } from "./interfaces";
import { AtivaWebhook } from "./AtivaWebhook";
import { getCustomRepository } from "typeorm";
import { Espera } from "../../utils/functions";
import { LinkGrupoPersonalizaRep } from "../../repositories/LinkGrupoPersonalizaRep";

class GravaLinkGruposAdd {
    async execute({
        opt_cod_cliente,
        opt_grupo_produto,
        opt_grupo_adicional,
        opt_exibir,
        id_cliente,
        nome_grupo_adicional,
        nome_grupo_prod,
    }: iLinkGrupoAdd) {
        const gruposRep = getCustomRepository(LinkGrupoPersonalizaRep);

        if (!opt_cod_cliente) {
            throw new Error("Não Foi Informado o Código de Cliente!");
        }
        if (!opt_grupo_produto) {
            throw new Error("Não Foi Informado o Código do Grupo de Produto!");
        }
        if (!opt_grupo_adicional) {
            throw new Error("Não Foi Informado o Nome do Grupo de Adicionais!");
        }
        if (!opt_exibir) {
            opt_exibir = "1";
        }

        const TestaCad = await gruposRep.findOne({
            opt_cod_cliente,
            opt_grupo_produto,
            opt_grupo_adicional,
        });
        var _grupo;
        if (TestaCad) {
            _grupo = await gruposRep.update(
                { opt_cod_cliente, opt_grupo_produto, opt_grupo_adicional },
                {
                    opt_exibir,
                }
            );
        } else {
            _grupo = await gruposRep.create({
                opt_cod_cliente,
                opt_grupo_produto,
                opt_grupo_adicional,
                opt_exibir,
            });
            await gruposRep.save(_grupo);
        }

        Espera(150);

        const grupoCad = await gruposRep.findOne({
            opt_cod_cliente,
            opt_grupo_produto,
            opt_grupo_adicional,
        });

        const itemGravando = `[{"id_cliente":"${id_cliente}","cod_grupo_produto": ${opt_grupo_produto},"grupo_produto": "${nome_grupo_prod}","cod_grupo_adicional":${opt_grupo_adicional}, "grupo_adicional":"${nome_grupo_adicional}","exibir": "${opt_exibir}"}]`;

        try {
            const disparoWebhook = new AtivaWebhook();
            const webhook = await disparoWebhook.execute({
                opt_cod_cliente,
                opt_finalidade: "5",
                Data: JSON.parse(JSON.stringify(itemGravando)),
            });

            return grupoCad.seq;
        } catch {
            throw new Error("Falha no Webhook");
        }
    }
}

export { GravaLinkGruposAdd };
