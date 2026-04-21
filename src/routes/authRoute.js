import express from 'express';
import { signUp,logIn,logOut, refreshToken, refreshTokenForExtension, logOutForExtension} from '../controllers/authController.js';


const router = express.Router();

router.post('/signup', signUp);

router.post('/login', logIn);

router.post('/logout', logOut);

router.post('/refresh-token', refreshToken);

router.post('/refresh-token-extension', refreshTokenForExtension);

router.post('/logout-extension', logOutForExtension);
export default router;