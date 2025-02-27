"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institutionsController_1 = require("../../controllers/api/institutionsController");
const institutionsController_2 = require("../../controllers/api/institutionsController");
const router = (0, express_1.Router)();
router.post('/', institutionsController_2.uploadFiles, institutionsController_1.empresaController.createEmpresa);
router.get('/', institutionsController_1.empresaController.getEmpresas);
router.get('/:id', institutionsController_1.empresaController.getEmpresaById);
router.put('/:id', institutionsController_2.uploadFiles, institutionsController_1.empresaController.updateEmpresa);
router.delete('/:id', institutionsController_1.empresaController.deleteEmpresa);
exports.default = router;
//# sourceMappingURL=institutionRouter.js.map