import "reflect-metadata";
import { DataSource } from "typeorm";
import { config as dotenv } from "dotenv";

// typescript fix
if ((process as any).env["loaded"] != "true") {
	dotenv({});
}

export const AppDataSource = new DataSource(require("../ormconfig").default);
