"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenManager = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jwtKey = process.env.JWT_KEY || "JWT_KEY";
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
class TokenManager {
    constructor() {
        this.createToken = (payload, jwtKey, EXPIRES_IN) => {
            const token = jsonwebtoken_1.default.sign(payload, jwtKey);
            return token;
        };
        this.getPayload = (token) => {
            try {
                const payload = jsonwebtoken_1.default.verify(token, jwtKey);
                return payload;
            }
            catch (error) {
                return null;
            }
        };
    }
}
exports.TokenManager = TokenManager;
//# sourceMappingURL=TokenManager.js.map