import { Request, Response } from "express";
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

export const getMain = async (req: Request, res: Response) => {
    res.status(200).sendFile('base.html', { root: 'build/public' });
};

export const getEndpoints = async (req: Request, res: Response) => {
    try {
        // Verifique se o caminho do arquivo está definido
        const endpointsPath = process.env.PATH_ENDPOINTS||"./../DATA/JSON/dataEndpoints.json";
        if (!endpointsPath) {
            return res.status(500).json({ error: 'PATH_ENDPOINTS is not defined in environment variables' });
        }

        // Verifique se o arquivo existe
        const fullPath = path.resolve(endpointsPath);
        if (!fs.existsSync(fullPath)) {
            return res.status(404).json({ error: `File not found at ${fullPath}` });
        }

        // Leia o arquivo JSON
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const jsonContent = JSON.parse(fileContent);

        // Envie o JSON como resposta
        res.status(200).json(jsonContent);
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while reading the JSON file.' });
    }
};
