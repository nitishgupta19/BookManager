/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { Router } from 'express';
import validation from '../../middlewares/validation.middleware';
import AuthController from './auth.controller';
import * as schema from './entity.validation';

const router = Router();

router.post('/signup', validation(schema.signUp), AuthController.signup);
router.post('/login', validation(schema.login), AuthController.login);
router.post('/logout', AuthController.logout);

export default router;
