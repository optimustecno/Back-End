import { ExecuteSQL } from "../../BancoSql";
import { getCustomRepository } from "typeorm";
import { PedidoRep } from "../repositories/PedidoRep";
import { Request, Response, NextFunction } from "express";
import { ServiceConsultaApp } from "../services/ServicePedidos";

export async function BuscaPedidosAccon(request: Request, response: Response, next: NextFunction) {
export async function BuscaPedidosAccon(request: Request, response: Response, next: NextFunction) {
    //BUSCANDO APLICATIVOS CADASTRADOS NO BANCO ON-LINE
    // var tempo = new Date()
    // console.log(`Coleta APPs ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
    const consultaApp = new ServiceConsultaApp();
    //
    const codigo_Cli = request.params.codigo;
    //console.log(request.query)
    var cTipo = request.query.tipo;
    //
    if (!cTipo) {
        cTipo = "";
    }
    //
    const apps = await consultaApp.execute({
        codigo_Cli,
    });
    //CASO NÃO RETORNE NENHUM REGISTRO
    if (!apps) {
        // var tempo = new Date()
        // console.log(`FIM Coleta APPs npe ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
        return response.status(404).json({
            error: "Não Há Nada Para Ser Listado",
        });
    }
    // DEFININDO VARIÁVEIS E CONSTANTES PARA SEREM UTILIZADAS ABAIXO
    const cEndAccon = process.env.API_ACCON;
    const fetch = require("node-fetch");
    var Token = "";
    //RODANDO UM FOR DENTRO DOS ELEMENTOS RETORNADOS PELO BANCO
    try {
        if (cTipo == "ACCON") {
            apps.forEach(async (app) => {
                //VERIFICANDO A EXISTENCIA DO TOKEN
                if (app.app === "ACCON") {
                    if (!app.token) {
                        // var tempo = new Date()
                        // console.log(`Coletando TOKEN ACCON ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
                        var urlencoded = new URLSearchParams();
                        urlencoded.append("email", app.login);
                        urlencoded.append("password", app.senha);
                        urlencoded.append("network", app.rede);
                        var requestOptions = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                            body: urlencoded,
                        };
                        var AcconResponse = await fetch(`${cEndAccon}/auth/login`, requestOptions);
                        //
                        console.log(`ACCON Cli ${codigo_Cli}`);
                        //
                        var AcconResponseJson = await AcconResponse.json();
                        // ajuste para subir
                        // var tempo = new Date()
                        // console.log(`TOKEN Coletado ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
                        Token = AcconResponseJson.token;
                        var AtualizaToken = await ExecuteSQL(
                            `UPDATE opt_cad_app SET token = '${Token}'
                            WHERE seq = ?`,
                            app.seq
                        );
                        // var tempo = new Date()
                        // console.log(`TOKEN Gravado ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
                    } else {
                        Token = app.token;
                    }
                    //BUSCANDO PEDIDOS
                    // var tempo = new Date()
                    // console.log(`Buscando Pedidos ACCON ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
                    var requestOptionsPed = {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${Token}`,
                            "X-NETWORK-ID": app.rede,
                        },
                    };
                    //
                    console.log(`ACCON Cli ${codigo_Cli}`);
                    //
                    var Pedidos = await fetch(`${cEndAccon}/order/pending`, requestOptionsPed);
                    var estatus = Pedidos.status;
                    if (estatus != 200) {
                        return next();
                    }
                    var PedidosJson = await Pedidos.json();
                    //console.log(PedidosJson)
                    // var tempo = new Date()
                    // console.log(`Pedidos Retornados ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
                    var nValTot = 0;
                    var nQuant = 0;
                    var nValUn = 0;
                    var nValTotComp = 0;
                    var nQuantComp = 0;
                    var nValUnComp = 0;
                    var nValTotAdicionais = 0;
                    // RODANDO UM FOR DENTRO DOS PEDIDOS RETORNADOS
                    if (estatus === 200) {
                        PedidosJson.forEach(async (pedido) => {
                            // VERIFICANDO SE O PEDIDO JÁ FOI IMPORTADO
                            var pedidoRep = getCustomRepository(PedidoRep);
                            var cont = 0;
                            var contComp = 0;
                            const ped = await pedidoRep.findOne({
                                where: {
                                    opt_cod_cliente: app.opt_cod_cliente,
                                    opt_cod_app: app.seq,
                                    opt_pedido_app: pedido._id,
                                },
                            });
                            if (!ped) {
                                var itens = pedido.products;
                                // RODANDO UM FOR DENTRO DOS ITENS DO PEDIDO
                                itens.forEach(async (item) => {
                                    // COLETANDO VALORES
                                    nValTotAdicionais = 0;
                                    cont = cont + contComp + 1;
                                    contComp = 0;
                                    var entrega = pedido.delivery ? "DEL" : "RET";
                                    var TextoObs = item.notes;
                                    var obsItem = item.modifiers;
                                    //ANALISANDO FORMA DE PAGAMENTO ONLINE
                                    var autorizacaoPag = "";
                                    var idTrans = "";
                                    var infoCard = "";
                                    var tipoCard = "";
                                    if (pedido.payment.online) {
                                        autorizacaoPag = pedido.payment.authorizationCode;
                                        idTrans = pedido.payment.tid;
                                        infoCard = pedido.payment.card;
                                        tipoCard = pedido.payment.type;
                                    }
                                    //
                                    try {
                                        obsItem.forEach(async (texto) => {
                                            if (texto.price.actualPrice === 0) {
                                                if (TextoObs === "") {
                                                    TextoObs = `(${texto.quantity}) ${texto.name}`;
                                                } else {
                                                    TextoObs =
                                                        TextoObs +
                                                        `¬(${texto.quantity}) ${texto.name}`;
                                                }
                                            } else {
                                                nValTotComp = texto.price.actualPrice;
                                                nQuantComp = texto.quantity;
                                                nValUnComp = nValTotComp / nQuantComp;
                                                contComp = contComp + 1;
                                                nValTotAdicionais = nValTotAdicionais + nValTotComp;
                                                var pedidoAcconADD = pedidoRep.create({
                                                    opt_cod_cliente: app.opt_cod_cliente,
                                                    cliente: pedido.user.name,
                                                    fone_cliente: pedido.user.phone,
                                                    cpf_cli: pedido.user.document,
                                                    opt_cod_app: app.seq,
                                                    opt_pedido_app: pedido._id,
                                                    opt_pedido: pedido.sequential,
                                                    opt_cod_prod: texto.externalVendorCode,
                                                    opt_nome_produto: texto.name,
                                                    obs_combo: "",
                                                    ordem: (cont + contComp).toString(),
                                                    cod_grupo: "000001",
                                                    quant: nQuantComp,
                                                    valor_un: nValUnComp,
                                                    valor_tot_prod: nValTotComp,
                                                    desconto: pedido.discount,
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
                                                    pagamento: pedido.payment.name,
                                                    obs_troco: `${pedido.change}`,
                                                    autorizacao: autorizacaoPag,
                                                    id_trans: idTrans,
                                                    info_car: infoCard,
                                                    tipo_rec_on: tipoCard,
                                                });
                                                await pedidoRep.save(pedidoAcconADD);
                                            }
                                        });
                                    } catch (error) {
                                        if (item.modifiers.price.actualPrice === 0) {
                                            TextoObs = TextoObs + `\n ${item.modifiers.name}`;
                                        } else {
                                            //implemntear insert
                                        }
                                    }
                                    nValTot = item.total;
                                    nValTot = nValTot - nValTotAdicionais;
                                    nQuant = item.quantity;
                                    nValUn = nValTot / nQuant;
                                    // var tempo = new Date()
                                    // console.log(`Gravando pedido ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
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
                                        ordem: cont.toString(),
                                        cod_grupo: "000001",
                                        quant: nQuant,
                                        valor_un: nValUn,
                                        valor_tot_prod: nValTot,
                                        desconto: pedido.discount,
                                        obs_item: TextoObs,
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
                                        pagamento: pedido.payment.name,
                                        obs_troco: `${pedido.change}`,
                                        autorizacao: autorizacaoPag,
                                        id_trans: idTrans,
                                        info_car: infoCard,
                                        tipo_rec_on: tipoCard,
                                    });
                                    await pedidoRep.save(pedidoAccon);
                                    // var tempo = new Date()
                                    // console.log(`fim Gravando pedido ${tempo.getHours()}:${tempo.getMinutes()}:${tempo.getSeconds()}:${tempo.getMilliseconds()}`)
                                }); //FECHANDO FOR ITEM
                            }
                        }); // FECHANDO FOR PEDIDOS
                    } else if ((estatus = 401)) {
                        var ZeraToken = await ExecuteSQL(
                            `UPDATE opt_cad_app SET token = ''
                            WHERE seq = ?`,
                            app.seq
                        );
                    }
                }
            }); // FECHANDO FOR APLICATIVOS
        }
    } catch (error) {
        return next();
    }
    return next();
}
