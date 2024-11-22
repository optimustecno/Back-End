import { getCustomRepository } from "typeorm";
import { NotasVersaoRep } from "../../repositories/NotasVersaoRep";

interface iCriaNota {
    opt_codigo_desenvolvedor: string;
    opt_sistema: string;
    opt_versao: string;
    opt_descricao: string;
    opt_observacao: string;
}

class ServiceCriaNota {
    async execute({
        opt_codigo_desenvolvedor,
        opt_sistema,
        opt_versao,
        opt_descricao,
        opt_observacao,
    }: iCriaNota) {
        const notaRep = getCustomRepository(NotasVersaoRep);

        const verCad = await notaRep.findOne({
            opt_sistema,
            opt_descricao,
            opt_versao,
        });

        if (verCad) {
            throw new Error("Nota Já Cadastrado!");
        }


        const _nota = await notaRep.create({
            opt_codigo_desenvolvedor,
            opt_codigo_tester: "0",
            opt_status:"0",
            opt_sistema,
            opt_versao,
            opt_descricao,
            opt_observacao,
            opt_aprovado: "0",
            opt_lancamento: ""
        });

        await notaRep.save(_nota);

        return _nota;
    }
}
export { ServiceCriaNota };
