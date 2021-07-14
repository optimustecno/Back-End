import React from "react";
import { PedidosPendentes } from "../src/routes"

function Home() {
    return (
        <div>
            <p>HOME</p>
            <button onClick={PedidosPendentes}>
                Teste
            </button>
        </div>
    )
}

export default Home;