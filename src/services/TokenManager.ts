import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ROLES } from "../enums/enums";

dotenv.config();
const jwtKey: string = process.env.JWT_KEY || "JWT_KEY";

const EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || "7d";
export interface TokenPayload {
  id: string;
  name: string;
  role: ROLES;
} // realocar para o arquivo da entidade User

export class TokenManager {
  public createToken = (
    payload: TokenPayload,
    jwtKey: string,
    EXPIRES_IN: string
  ): any => {
    // Ensure the JWT_KEY is a string (throw error if undefined)

    const token: any = jwt.sign(payload, jwtKey);
    return token;
  };

  public getPayload = (token: string): TokenPayload | null => {
    try {
      const payload = jwt.verify(token, jwtKey);

      return payload as TokenPayload;
    } catch (error: any) {
      return null;
    }
  };
}
