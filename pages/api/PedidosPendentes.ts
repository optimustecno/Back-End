import { verify } from "jsonwebtoken";
import { ExecuteSQL } from "../../BancoSql";
import { getCustomRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { PedidoRep } from "../../src/repositories/PedidoRep"
import { NowRequest, NowResponse } from "@vercel/node"
import { UsuarioRep } from "../../src/repositories/UsuarioRep";
import { ServiceConsultaApp } from "../../src/services/ServiceConsApp";

interface IUsuarioAutorizado {
    sub: string
}

// IMPORTANDO ARQUIVOS DA ACCON
export async function BuscaPedidosAccon(request: NowRequest, response: NowResponse) {
    //BUSCANDO APLICATIVOS CADASTRADOS NO BANCO ON-LINE
    const consultaApp = new ServiceConsultaApp();
    const apps = await consultaApp.execute();
    //CASO NÃO RETORNE NENHUM REGISTRO
    if (!apps) {
        return response.status(404).json({
            error: "Não Há Nada Para Ser Listado"
        });
    }
    // DEFININDO VARIÁVEIS E CONSTANTES PARA SEREM UTILIZADAS ABAIXO
    //const cEndAccon = process.env.API_ACCON;

    const cEndAccon = "https://api.accon.app/v1"
    const fetch = require("node-fetch");
    var Token = "";
    //RODANDO UM FOR DENTRO DOS ELEMENTOS RETORNADOS PELO BANCO
    apps.forEach(async app => {
        //VERIFICANDO A EXISTENCIA DO TOKEN
        if (!app.token) {
            var urlencoded = new URLSearchParams();
            urlencoded.append("email", app.login);
            urlencoded.append("password", app.senha);
            urlencoded.append("network", app.rede);
            var requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: urlencoded,
            };
            const AcconResponse = await fetch(`${cEndAccon}/auth/login`, requestOptions);
            const AcconResponseJson = await AcconResponse.json();
            Token = AcconResponseJson.token;
            const AtualizaToken = await ExecuteSQL(
                `UPDATE opt_cad_app SET token = '${Token}'
                WHERE seq = ?`, app.seq
            )
        }
        else {
            Token = app.token
        }
        //BUSCANDO PEDIDOS
        console.log("BUSCANDO PEDIDOS")
        var requestOptionsPed = {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${Token}`,
                "X-NETWORK-ID": app.rede
            }
        };
        const Pedidos = await fetch(`${cEndAccon}/order/pending`, requestOptionsPed);
        const PedidosJson = await Pedidos.json();
        var nValTot = 0;
        var nQuant = 0;
        var nValUn = 0;
        // RODANDO UM FOR DENTRO DOS PEDIDOS RETORNADOS
        PedidosJson.forEach(async pedido => {
            var itens = pedido.products
            console.log(itens)
            // RODANDO UM FOR DENTRO DOS ITENS DO PEDIDO
            itens.forEach(async item => {
                console.log(pedido.date.split("T")[1].substring(0, 5))
                // COLETANDO VALORES
                nValTot = item.total;
                nQuant = item.quantity;
                nValUn = nValTot / nQuant;
                var entrega = pedido.delivery ? "DEL" : "RET";

                const pedidoRep = getCustomRepository(PedidoRep);

                var pedidoAccon = pedidoRep.create({
                    opt_cod_cliente: app.opt_cod_cliente,
                    cliente: pedido.user.name,
                    fone_cliente: pedido.user.phone,
                    cpf_cli: pedido.user.document,
                    opt_cod_app: app.seq,
                    opt_pedido_app: pedido._id,
                    opt_pedido: pedido.sequential,
                    opt_cod_prod: item.externalVendorCode,
                    opt_nome_produto: item.name,
                    obs_combo: "",
                    ordem: "0",
                    cod_grupo: "000001",
                    quant: nQuant,
                    valor_un: nValUn,
                    valor_tot_prod: nValTot,
                    obs_item: item.notes,
                    tipo: entrega,
                    taxa_ent: pedido.deliveryTax,
                    hora: pedido.date.split("T")[1].substring(0, 5),
                    data: pedido.date.split("T")[0],
                    status: "0",
                    novo_status: "0",
                    endereco: pedido.address.address,
                    numero: pedido.address.number,
                    bairro: pedido.address.district,
                    complemento: pedido.address.complement,
                    valor_total_ped: pedido.total,
                    obs: pedido.notes,
                    obs_troco: `TROCO PARA ${pedido.change}`
                })
                await pedidoRep.save(pedidoAccon)
            }); //FECHANDO FOR ITEM
        }); // FECHANDO FOR PEDIDOS
    }); // FECHANDO FOR APLICATIVOS
    return response.status(200).json({
        message: "Itens Gravados!"
    });;
}

// function nada() {
//     return {}
// }

// export default nada;