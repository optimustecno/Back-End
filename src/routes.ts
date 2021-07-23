import { Request, Response, Router } from "express";
import { Autoriza } from "./middlewares/AutorizaPost";
import { ControleConsApp } from "./Controller/ControleConsApp";
import { VerificaUsuario } from "./middlewares/VerificaUsuario";
import { BuscaPedidosAccon } from "./middlewares/BuscaPedidosAccon";
import { ControleConsPedido } from "./Controller/ControleConsPedido";
import { ControleAutenticao } from "./Controller/ControleAutenticacao";
import { ControleInsertUsuario } from "./Controller/ControleInsUsuario";
import { ControleMudancaStatus } from "./Controller/ControleMudaStatus";
import { ControleUpdateStatus } from "./Controller/ControleUpdateStatus";

const Rotas = Router();

const consultaApps = new ControleConsApp();
const updateStatus = new ControleUpdateStatus();
const consultaPedidos = new ControleConsPedido();
const insereUsuario = new ControleInsertUsuario();
const autenticaUsuario = new ControleAutenticao();
const consultaProximoStatus = new ControleMudancaStatus();

Rotas.post("/Login", autenticaUsuario.handle)
Rotas.get("/ConsApp", VerificaUsuario, consultaApps.handle)
Rotas.post("/InsUsuario", VerificaUsuario, Autoriza, insereUsuario.handle)
Rotas.post("/UpdateStatus", VerificaUsuario, Autoriza, updateStatus.handle)
Rotas.post("/InsPedidoOptimus", VerificaUsuario, Autoriza, BuscaPedidosAccon)
Rotas.post("/ProxStatus", VerificaUsuario, Autoriza, consultaProximoStatus.handle)
Rotas.get("/PedidosPendentes/:codigo", VerificaUsuario, Autoriza, BuscaPedidosAccon, consultaPedidos.handle)

Rotas.get("/PedidosUaiRango", (request: Request, response: Response) => {

    console.log("TESTE")

    var headrs = request.headers

    console.log(headrs["x-uairango-key"])

    return response.status(200).json({ Message: "OK" })
})

export { Rotas }