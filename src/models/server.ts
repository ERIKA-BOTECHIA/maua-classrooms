import dotenv from "dotenv";
dotenv.config();
const port :number = Number(process.env.PORT)||9494
import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import mysql from "mysql2"; // Importando o mysql2
import mainRouter from "../routes/mainRouter";
import userRouter from "../routes/users/usersRouter";
import booksRouter from '../routes/api/booksRouter'
import enterpriseRouter from '../routes/api/institutionRouter'
/*Esse é o modelo de servidor a ser usado em index*/

export class Server {
  private app: Application;
  private port: number=port;
  private mainPaths = {
    main: "/",
  };

  private booksPaths ={
    books: "/books"
  };
  private apiPaths = {
    api: "/api",
  };

  private authPaths = {
    auth: "/users",
  };

  private enterprisePaths = {
    institutions: "/institutions",
  };


  constructor() {
    this.app = express();
    this.port 

    this.middlewares();
    this.routes();
  }




  middlewares() {
    // Connect to MongoDB
    mongoose.set("strictQuery", true);
    mongoose
      .connect(
        process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as mongoose.ConnectOptions
      )
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB", err);
      });

    // CORS
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // MORGAN
    this.app.use(morgan("dev"));

    // CORS
    this.app.use(cors());

    // BODY PARSER
    this.app.use(express.json());
    this.app.use(express.static(path.resolve("build/JSON")));
    this.app.use(express.static(path.resolve("build/views")));
    this.app.use(express.static(path.resolve("build/public")));
    this.app.use(express.static(path.resolve("build/client")));

    // Usar o middleware de conexão MySQL globalmente em todas as rotas
  }

  routes() {
    this.app.use(this.mainPaths.main, mainRouter);
    this.app.use(this.authPaths.auth, userRouter);
    this.app.use(this.booksPaths.books, booksRouter)
    this.app.use(this.enterprisePaths.institutions, enterpriseRouter)


  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
