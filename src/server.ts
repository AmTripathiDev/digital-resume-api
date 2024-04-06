import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import UserRouter from "./routers/user-router";
import ContactUsRouter from "./routers/contact-us-router";
import ResumeRouter from "./routers/resume-router";
import { environment } from "./environments/environment.dev";

export class Server {
  corsOptions: cors.CorsOptions = {
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "Authorization",
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false,
  };
  public app: express.Application;
  // DIST_FOLDER = join(process.cwd(), 'dist');
  // APP_NAME = 'resume-builder';

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  config() {
    const MONGO_URI: string = environment.db_url;

    mongoose
      .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("CONNECTED TO MONGO DATABASE");
      })
      .catch((err) => {
        console.log("THIS IS ERROR ", err);
      });

    this.app.use(bodyParser.json());
    this.app.use("*", cors(this.corsOptions));
  }
  routes() {
    this.app.use("/src/uploads", express.static("src/uploads"));
    this.app.use("/api/user", UserRouter);
    this.app.use("/api/contact", ContactUsRouter);
    this.app.use("/api/resume", ResumeRouter);
    this.app.use(this.logErrors);
    this.app.use(this.errorHandle);
  }

  errorHandle(error, req, res, next) {
    {
      res.status(error.status || 500);
      res.json({
        error: error.message,
      });
    }
  }

  logErrors(req, res, next) {
    let error: any;
    error = new Error("Not Found");
    error.status = 404;
    next(error);
  }
}

export default new Server().app;
