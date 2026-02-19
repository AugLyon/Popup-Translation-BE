import express from 'express';
import { signUp,logIn,logOut, refreshToken } from '../controllers/authController.js';
import { getMe } from '../controllers/userController.js';
import { protectedRoute } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.post('/signup', signUp);

router.post('/login', logIn);

router.post('/logout', logOut);

router.get('/me',protectedRoute ,getMe);

router.post('/refresh-token', refreshToken);
export default router;