import express, { Router } from 'express';
import * as usersController from '../../controllers/users/usersController';
const router = Router();

router.post('/sign-up', usersController.signUp);
router.post('/sign-in', usersController.signIn);
router.post('/recovery', usersController.passwordRecovery);

export default router;