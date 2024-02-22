import { getCustomRepository } from "typeorm";
import { CardapioCliRep } from "../../repositories/CardapioCliRep";

interface iCardapio {
    opt_cod_cliente: string;
    cor_primaria: string;
    cor_secundaria: string;
    cor_destaque_prod: string;
    cor_fonte: string;
    logo_svg?: string;
}

class ServiceCriaPerfilCardapio {
    async execute({
        opt_cod_cliente,
        cor_primaria,
        cor_secundaria,
        cor_destaque_prod,
        cor_fonte,
        logo_svg,
    }: iCardapio) {
        const PerfilRep = getCustomRepository(CardapioCliRep);

        if (!opt_cod_cliente) {
            throw new Error("Não Foi Informado o Código de Cliente!");
        }

        const TestaCad = await PerfilRep.findOne({
            opt_cod_cliente,
        });

        if (TestaCad) {
            throw new Error("Cardápio Existente!");
        }

        const _perfil = await PerfilRep.create({
            opt_cod_cliente,
            cor_primaria,
            cor_secundaria,
            cor_destaque_prod,
            cor_fonte,
            logo_svg,
        });

        await PerfilRep.save(_perfil);

        const PerfilCad = await PerfilRep.findOne({
            opt_cod_cliente,
        });

        return PerfilCad;
    }
}

export { ServiceCriaPerfilCardapio };
