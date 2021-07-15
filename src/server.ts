import cors from "cors";
import "./Database"
import 'reflect-metadata'
import "express-async-errors"
import { Rotas } from './routes';
import express, { NextFunction, Request, Response } from "express";

const Api = express();
Api.use(cors());

Api.use(express.json())

Api.use(Rotas)

Api.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

Api.listen(8080, () => console.log("Servidor Iniciado na porta 8080"));
