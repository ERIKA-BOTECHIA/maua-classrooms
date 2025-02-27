"use strict";
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
exports.getEndpoints = exports.getMain = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const getMain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('base.html', { root: 'build/public' });
});
exports.getMain = getMain;
const getEndpoints = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const endpointsPath = process.env.PATH_ENDPOINTS || "./../DATA/JSON/dataEndpoints.json";
        if (!endpointsPath) {
            return res.status(500).json({ error: 'PATH_ENDPOINTS is not defined in environment variables' });
        }
        const fullPath = path_1.default.resolve(endpointsPath);
        if (!fs_1.default.existsSync(fullPath)) {
            return res.status(404).json({ error: `File not found at ${fullPath}` });
        }
        const fileContent = fs_1.default.readFileSync(fullPath, 'utf-8');
        const jsonContent = JSON.parse(fileContent);
        res.status(200).json(jsonContent);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while reading the JSON file.' });
    }
});
exports.getEndpoints = getEndpoints;
//# sourceMappingURL=mainController.js.map