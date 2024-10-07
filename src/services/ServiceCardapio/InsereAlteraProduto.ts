import { getCustomRepository } from "typeorm";
import { ProdCardapioRep } from "../../repositories/ProdutosCardapioRep";

interface iCardapio {
    opt_cod_cliente: string;
    cod_produto: string;
    grupo: string;
    produto: string;
    descricao?: string | null;
    destaque?: string | "0";
    valor: Number;
    cod_grupo: string;
    ordem: string;
    exibir: string;
}

class ServiceInsereAlteraProduto {
    async execute({
        opt_cod_cliente,
        cod_produto,
        grupo,
        produto,
        descricao,
        destaque,
        valor,
        cod_grupo,
        ordem,
        exibir,
    }: iCardapio) {
        const ProdutosRep = getCustomRepository(ProdCardapioRep);

        if (!opt_cod_cliente) {
            throw new Error("Não Foi Informado o Código de Cliente!");
        }
        if (!cod_produto) {
            throw new Error("Não Foi Informado o Código de Produto!");
        }
        if (!produto) {
            throw new Error("Não Foi Informado o Nome do Produto!");
        }
        if (!valor) {
            throw new Error("Não Foi Informado o Valor do Produto!");
        }

        const TestaCad = await ProdutosRep.findOne({
            opt_cod_cliente,
            cod_produto,
        });

        var _prod;
        var venda = + valor / 100;

        // console.log(`${cod_produto} ${valor} ${venda}`)

        if (TestaCad) {
            _prod = await ProdutosRep.update(
                { opt_cod_cliente: opt_cod_cliente, cod_produto: cod_produto },
                {
                    grupo,
                    produto,
                    descricao,
                    destaque,
                    valor: venda,
                    cod_grupo,
                    ordem,
                    exibir,
                }
            );
        } else {
            _prod = await ProdutosRep.create({
                opt_cod_cliente,
                cod_produto,
                grupo,
                produto,
                descricao,
                destaque,
                valor: venda,
                cod_grupo,
                ordem,
                exibir,
            });
            await ProdutosRep.save(_prod);
        }

        const ProdCad = await ProdutosRep.findOne({
            opt_cod_cliente,
            cod_produto,
        });

        return ProdCad;
    }
}

export { ServiceInsereAlteraProduto };
