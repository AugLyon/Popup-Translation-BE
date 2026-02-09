import express from 'express';
import { authenticateUser } from '../controllers/userController';


const router = express.Router();

router.get('/authenticate', authenticateUser);