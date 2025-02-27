import { Request, Response } from "express";

import dotenv from 'dotenv';
dotenv.config();
const endpoints = process.env.PATH_ENDPOINTS;

export const getMain = async (req: Request, res: Response) => {
    try {
        res.status(200).json(endpoints);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};