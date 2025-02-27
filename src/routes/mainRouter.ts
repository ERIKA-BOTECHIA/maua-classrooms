import express from 'express';
import { Router } from 'express';
import * as  mainController from './../controllers/mainController';
const router = express.Router();



router.get('/', mainController.getMain);
router.get('/endpoints', mainController.getEndpoints)

export default router;