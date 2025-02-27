import dotenv from "dotenv";
dotenv.config();

const PATH_STORAGE = process.env.STORAGE_FOLDER|| path.resolve("STORAGE");

import { Request, Response } from "express";
import mongoose, { Schema, Document } from "mongoose";
import multer from "multer";
import path from "path";
import { DOMINIOS_EMPRESA } from "../../enums/enums";

// Define the Empresa interface
interface IEmpresa extends Document {
  razaoSocial: string;
  nomeFantasia: string;
  abbr: string | null;
  cnpj: string;
  cidade: string;
  UF: string;
  Pais: string;
  telefone: string | null;
  web: string | null;
  logo: string | null;
  imgUrl: string[] | null;
  videoURL: string[] | null;
  iconUrl: string | null;
  dominioPrincipal: DOMINIOS_EMPRESA;
  descricao: string | null;
  email: string;
  matrizOuFilial: string  
}

// Define the Empresa schema
const EmpresaSchema: Schema = new Schema({
  razaoSocial: { type: String, required: true },
  nomeFantasia: { type: String, required: true },
  abbr: { type: String, required: false },
  CNPJ: { type: String, required: true },
  cidade: { type: String, required: true },
  UF: { type: String, required: true },
  Pais: { type: String, required: true },
  telefone: { type: String, required: false },
  web: { type: String, required: false },
  logo: { type: String, required: false },
  imgUrl: { type: [String], required: false },
  videoURL: { type: [String], required: false },
  iconUrl: { type: String, required: false },
  dominioPrincipal: { type: Number, required: true },
  descricao: { type: String, required: false },
  email: { type: String, required: true },
  matrizOuFilial:{type: String, require: true, default: "MATRIZ"}
},{
  collection: "Institution"
}); // Specify the collection name
;


// Create the Empresa model
const Empresa = mongoose.model<IEmpresa>("Institution", EmpresaSchema);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH_STORAGE);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

class EmpresaController {
  // Create a new Empresa
  async createEmpresa(req: Request, res: Response): Promise<void> {
    try {
      const newEmpresa = new Empresa(req.body);
      if (req.files) {
        const files = req.files as {
          [fieldname: string]: Express.Multer.File[];
        };
        if (files.logo) newEmpresa.logo = files.logo[0].path;
        if (files.imgUrl)
          newEmpresa.imgUrl = files.imgUrl.map((file) => file.path);
        if (files.videoURL)
          newEmpresa.videoURL = files.videoURL.map((file) => file.path);
        if (files.iconUrl) newEmpresa.iconUrl = files.iconUrl[0].path;
      }
      await newEmpresa.save();
      res.status(201).json(newEmpresa);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get all empresas
  async getEmpresas(req: Request, res: Response): Promise<void> {
    try {
      const empresas = await Empresa.find();
      res.status(200).json(empresas);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get a single empresa by ID
  async getEmpresaById(req: Request, res: Response): Promise<void> {
    try {
      const empresa = await Empresa.findById(req.params.id);
      if (!empresa) {
        res.status(404).json({ message: "Empresa not found" });
        return;
      }
      res.status(200).json(empresa);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update an empresa by ID
  async updateEmpresa(req: Request, res: Response): Promise<void> {
    try {
      const empresa = await Empresa.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!empresa) {
        res.status(404).json({ message: "Empresa not found" });
        return;
      }
      if (req.files) {
        const files = req.files as {
          [fieldname: string]: Express.Multer.File[];
        };
        if (files.logo) empresa.logo = files.logo[0].path;
        if (files.imgUrl)
          empresa.imgUrl = files.imgUrl.map((file) => file.path);
        if (files.videoURL)
          empresa.videoURL = files.videoURL.map((file) => file.path);
        if (files.iconUrl) empresa.iconUrl = files.iconUrl[0].path;
      }
      await empresa.save();
      res.status(200).json(empresa);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete an empresa by ID
  async deleteEmpresa(req: Request, res: Response): Promise<void> {
    try {
      const empresa = await Empresa.findByIdAndDelete(req.params.id);
      if (!empresa) {
        res.status(404).json({ message: "Empresa not found" });
        return;
      }
      res.status(200).json({ message: "Empresa deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

// Export the controller and multer upload
export const empresaController = new EmpresaController();
export const uploadFiles = upload.fields([
  { name: "logo", maxCount: 1 },
  { name: "imgUrl", maxCount: 10 },
  { name: "videoURL", maxCount: 10 },
  { name: "iconUrl", maxCount: 1 },
]);
