import express from 'express';
import { Router } from 'express';
import * as  apiController from '../../controllers/api/apiController';
const router = express.Router();


router.get('/', apiController.getMain);

export default router;