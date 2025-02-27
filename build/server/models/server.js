"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = Number(process.env.PORT) || 9494;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const mainRouter_1 = __importDefault(require("../routes/mainRouter"));
const usersRouter_1 = __importDefault(require("../routes/users/usersRouter"));
const booksRouter_1 = __importDefault(require("../routes/api/booksRouter"));
const institutionRouter_1 = __importDefault(require("../routes/api/institutionRouter"));
class Server {
    constructor() {
        this.port = port;
        this.mainPaths = {
            main: "/",
        };
        this.booksPaths = {
            books: "/books"
        };
        this.apiPaths = {
            api: "/api",
        };
        this.authPaths = {
            auth: "/users",
        };
        this.enterprisePaths = {
            institutions: "/institutions",
        };
        this.app = (0, express_1.default)();
        this.port;
        this.middlewares();
        this.routes();
    }
    middlewares() {
        mongoose_1.default.set("strictQuery", true);
        mongoose_1.default
            .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => {
            console.log("Connected to MongoDB");
        })
            .catch((err) => {
            console.error("Error connecting to MongoDB", err);
        });
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(path_1.default.resolve("build/JSON")));
        this.app.use(express_1.default.static(path_1.default.resolve("build/views")));
        this.app.use(express_1.default.static(path_1.default.resolve("build/public")));
        this.app.use(express_1.default.static(path_1.default.resolve("build/client")));
    }
    routes() {
        this.app.use(this.mainPaths.main, mainRouter_1.default);
        this.app.use(this.authPaths.auth, usersRouter_1.default);
        this.app.use(this.booksPaths.books, booksRouter_1.default);
        this.app.use(this.enterprisePaths.institutions, institutionRouter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map