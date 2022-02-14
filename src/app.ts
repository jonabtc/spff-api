import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import database from "./config/database.config";
import { loadEndpoints } from "./controllers/endpoints";

export default class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    dotenv.config();
    database.connect();
    this.app.set("port", process.env.PORT || 3000);
    this.app.set("version", process.env.VERSION || "v1");
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    loadEndpoints(this.app);
  }

  public close(): void {
    database.disconnect();
  }
}
