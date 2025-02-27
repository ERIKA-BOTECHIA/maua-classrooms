import { Router } from 'express';
import { empresaController } from '../../controllers/api/institutionsController';
import { uploadFiles } from  '../../controllers/api/institutionsController';
const router = Router();

router.post('/', uploadFiles, empresaController.createEmpresa);
router.get('/', empresaController.getEmpresas);
router.get('/:id', empresaController.getEmpresaById);
router.put('/:id', uploadFiles, empresaController.updateEmpresa);
router.delete('/:id', empresaController.deleteEmpresa);

export default router;