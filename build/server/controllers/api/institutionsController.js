"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = exports.empresaController = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PATH_STORAGE = process.env.STORAGE_FOLDER || path_1.default.resolve("STORAGE");
const mongoose_1 = __importStar(require("mongoose"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const EmpresaSchema = new mongoose_1.Schema({
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
    matrizOuFilial: { type: String, require: true, default: "MATRIZ" }
}, {
    collection: "Institution"
});
;
const Empresa = mongoose_1.default.model("Institution", EmpresaSchema);
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH_STORAGE);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = (0, multer_1.default)({ storage });
class EmpresaController {
    createEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newEmpresa = new Empresa(req.body);
                if (req.files) {
                    const files = req.files;
                    if (files.logo)
                        newEmpresa.logo = files.logo[0].path;
                    if (files.imgUrl)
                        newEmpresa.imgUrl = files.imgUrl.map((file) => file.path);
                    if (files.videoURL)
                        newEmpresa.videoURL = files.videoURL.map((file) => file.path);
                    if (files.iconUrl)
                        newEmpresa.iconUrl = files.iconUrl[0].path;
                }
                yield newEmpresa.save();
                res.status(201).json(newEmpresa);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    getEmpresas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresas = yield Empresa.find();
                res.status(200).json(empresas);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    getEmpresaById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresa = yield Empresa.findById(req.params.id);
                if (!empresa) {
                    res.status(404).json({ message: "Empresa not found" });
                    return;
                }
                res.status(200).json(empresa);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    updateEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresa = yield Empresa.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                });
                if (!empresa) {
                    res.status(404).json({ message: "Empresa not found" });
                    return;
                }
                if (req.files) {
                    const files = req.files;
                    if (files.logo)
                        empresa.logo = files.logo[0].path;
                    if (files.imgUrl)
                        empresa.imgUrl = files.imgUrl.map((file) => file.path);
                    if (files.videoURL)
                        empresa.videoURL = files.videoURL.map((file) => file.path);
                    if (files.iconUrl)
                        empresa.iconUrl = files.iconUrl[0].path;
                }
                yield empresa.save();
                res.status(200).json(empresa);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    deleteEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresa = yield Empresa.findByIdAndDelete(req.params.id);
                if (!empresa) {
                    res.status(404).json({ message: "Empresa not found" });
                    return;
                }
                res.status(200).json({ message: "Empresa deleted successfully" });
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.empresaController = new EmpresaController();
exports.uploadFiles = upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "imgUrl", maxCount: 10 },
    { name: "videoURL", maxCount: 10 },
    { name: "iconUrl", maxCount: 1 },
]);
//# sourceMappingURL=institutionsController.js.map