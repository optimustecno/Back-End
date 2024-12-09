import { getCustomRepository } from "typeorm";
import { iPersonalizacoes } from "./interfaces";
import { AdicionaisRep } from "../../repositories/AdicionaisRep";

class ServiceInsereAlteraAdd {
    async execute({
        opt_cod_cliente,
        cod_grupo_adicional,
        cod_adicional,
        nome,
        valor,
        aceita_quantidade,
        exibir,
    }: iPersonalizacoes) {
        const AddRep = getCustomRepository(AdicionaisRep);

        if (!opt_cod_cliente) {
            throw new Error("Não Foi Informado o Código de Cliente!");
        }
        if (!cod_grupo_adicional) {
            throw new Error("Não Foi Informado o Código do Grupo de Adicionais!");
        }
        if (!cod_adicional) {
            throw new Error("Não Foi Informado o Codigo do Adicional!");
        }
        if (!nome) {
            throw new Error("Não Foi Informado o Nome do Adicional!");
        }
        if (!aceita_quantidade) {
            aceita_quantidade = "0";
        }
        if (!valor) {
            // console.log(`valor: ${valor}`);
            valor = 0;
        }
        if (!exibir) {
            exibir = "0"
        }

        const TestaCad = await AddRep.findOne({
            opt_cod_cliente,
            cod_adicional,
        });

        var _add;
        var venda = +valor / 100;

        if (TestaCad) {
            _add = await AddRep.update(
                { opt_cod_cliente: opt_cod_cliente, cod_adicional: cod_adicional },
                {
                    cod_grupo_adicional,
                    nome,
                    valor: venda,
                    aceita_quantidade,
                    exibir,
                    webhook: "0"
                }
            );
        } else {
            _add = await AddRep.create({
                opt_cod_cliente,
                nome,
                cod_adicional,
                cod_grupo_adicional,
                valor: venda,
                aceita_quantidade,
                exibir,
                webhook: "0"
            });
            await AddRep.save(_add);
        }

        const ProdCad = await AddRep.find({
            opt_cod_cliente,
            cod_adicional,
            cod_grupo_adicional
        });

        return ProdCad;
    }
}

export { ServiceInsereAlteraAdd };
