import express, { Router } from "express";
import * as pagesController from "../../controllers/pages/pagesController";
const router = Router();

router.get("/", pagesController.getPage0);

export default router;
