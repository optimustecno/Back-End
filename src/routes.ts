import { Router } from "express";
import { Autoriza } from "./middlewares/AutorizaPost";
import { ControleConsApp } from "./Controller/ControleConsApp"
import { VerificaUsuario } from "./middlewares/VerificaUsuario";
import { BuscaPedidosAccon } from "./middlewares/BuscaPedidosAccon";
import { ControleAutenticao } from "./Controller/ControleAutenticacao";
import { ControleInsertUsuario } from "./Controller/ControleInsUsuario";
import { ControleInsertPedido } from "./Controller/ControleInsertPedido";

const Rotas = Router();

const consultaApps = new ControleConsApp();
const insereUsuario = new ControleInsertUsuario();
const autenticaUsuario = new ControleAutenticao();
const insereContPedido = new ControleInsertPedido();

Rotas.post("/Login", autenticaUsuario.handle)
Rotas.post("/InsPedidoOptimus",
    VerificaUsuario,
    Autoriza,
    BuscaPedidosAccon)
Rotas.post("/InsUsuario", VerificaUsuario, Autoriza, insereUsuario.handle)
Rotas.get("/ConsApp", VerificaUsuario, consultaApps.handle)

async function PedidosPendentes() {
    return (
        Rotas.post("/InsPedidoOptimus",
            BuscaPedidosAccon)
    )
}

export { Rotas, PedidosPendentes }