"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.turso = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@libsql/client");
dotenv_1.default.config();
exports.turso = (0, client_1.createClient)({
    url: process.env.TURSO_DATABASE_URL || "",
    authToken: process.env.TOKE_TURSO || "",
});
//# sourceMappingURL=config.js.map