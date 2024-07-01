import { getCustomRepository } from "typeorm";
import { ClientesRep } from "../../repositories/ClienteRep";

interface iCliente {
    opt_cod_cliente: string;
    DataVencimento: string;
}

class ServiceLicencaOff {
    async execute({ opt_cod_cliente, DataVencimento }: iCliente) {
        const clientesRep = getCustomRepository(ClientesRep);
        const ClientesCad = await clientesRep.findOne({
            opt_cod_cliente,
        });

        if (!ClientesCad) {
            throw new Error("Nenhum Registro Encontrado!");
        }
        if (ClientesCad.data_cancelamento != "0000-00-00") {
            throw new Error("Cliente Cancelado Não é Possível Gerar Chave!");
        }
        var Licenca = "";
        //console.log(DataVencimento);
        var DataComp = DataVencimento.split("/");
        var Dia = DataComp[0];
        var Mes = DataComp[1];
        var Ano = DataComp[2];
        var Cli = opt_cod_cliente;
        //var DataJunta = `${Ano}${Mes}${Dia}`;
        var FatorId = (6 * 15 + 15 - 4) ** Number(process.env.FATOR);
        var FatorId2 = (7 + 5 + 18 + 5 + 14 + 20 + 5)  ** Number(process.env.FATOR);
        var FatorId3 = Number(FatorId) - Number(FatorId2);
        //
        var CriptCli = (Number(FatorId) - Number(Cli)) * Number(FatorId2);
        var CriptDia = Number(FatorId3) * Number(Dia);
        var CriptMes = Number(FatorId3) * Number(Mes);
        var CriptAno = (Number(FatorId) + Number(FatorId2) + Number(FatorId3)) * Number(Ano);
        //
        var cParte = `00000000000${CriptMes}`;
        var iLen = String(cParte).length;
        cParte = cParte.substring(iLen, iLen - 10);
        Licenca = `${Licenca}${cParte}-`;
        cParte = `00000000000${CriptAno}`;
        iLen = String(cParte).length;
        cParte = cParte.substring(iLen, iLen - 12);
        Licenca = `${Licenca}${cParte}-`;
        cParte = `00000000000${CriptCli}`;
        iLen = String(cParte).length;
        cParte = cParte.substring(iLen, iLen - 16);
        Licenca = `${Licenca}${cParte}-`;
        cParte = `00000000000${CriptDia}`;
        iLen = String(cParte).length;
        cParte = cParte.substring(iLen, iLen - 10);
        Licenca = `${Licenca}${cParte}`;
        //
        return { Licenca };
    }
}

export { ServiceLicencaOff };
