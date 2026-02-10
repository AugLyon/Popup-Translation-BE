import express from 'express';
import { authenticateUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/authenticate', authenticateUser);
export default router;