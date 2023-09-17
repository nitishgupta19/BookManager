import { Router } from 'express';
import authRoutes from './controllers/authController';
import bookRoutes from './controllers/bookController/index'

const router = Router();
/*
 - Auth route for login, signup and logout api's
 - User route for user list , user detail , profile update api's
 */
router.use('/auth', authRoutes);
router.use('/book' , bookRoutes)

module.exports = router;
