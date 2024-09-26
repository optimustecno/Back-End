import { getCustomRepository } from "typeorm";
import { GrupoPersonalizaRep } from "../../repositories/GrupoPersonalizaRep"; 


interface iDevGruposPersonalizacao {
    opt_cod_cliente: string;
    cod_grupo: string;
}

class ConsultaGruposPersonalizacaoDev {
    async execute({ opt_cod_cliente, cod_grupo }: iDevGruposPersonalizacao) {

        const personalizaRep = getCustomRepository(GrupoPersonalizaRep);

        const Grupos = await personalizaRep.find(
            { opt_cod_cliente, cod_grupo }
        );

        return Grupos;
    }
}

export { ConsultaGruposPersonalizacaoDev };
