import { getCustomRepository } from "typeorm";
import { ViewGruposAddRep } from "../../repositories/ViewGrupoAdicionais";

interface iDevGruposPersonalizacao {
    cod_cliente: string;
    cod_grupo_produto: string;
}

class ConsultaGruposPersonalizacaoDev {
    async execute({ cod_cliente, cod_grupo_produto }: iDevGruposPersonalizacao) {
        const personalizaRep = getCustomRepository(ViewGruposAddRep);

        const Grupos = await personalizaRep.find({ cod_cliente, cod_grupo_produto });

        return Grupos;
    }
}

export { ConsultaGruposPersonalizacaoDev };
