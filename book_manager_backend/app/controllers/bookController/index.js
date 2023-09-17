import { Router } from 'express';
import validation from '../../middlewares/validation.middleware';
import authorizerMiddelware from '../../middlewares/auth.middleware';
import * as schema from './entity.validation';
import BookController from './book.controller';
const router = Router();

router.post('/list', BookController.list);
router.post(
  '/create',
  authorizerMiddelware(),
  validation(schema.create),
  BookController.create
);
router.get('/:id',  authorizerMiddelware(),BookController.detail);
router.post('/update',  authorizerMiddelware(),validation(schema.update), BookController.update);
export default router;