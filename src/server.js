import 'dotenv/config';
import cookieParser from 'cookie-parser';

import express from 'express';
import cors from 'cors';
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import connectDB from './libs/db.js'; // Note the .js extension—it's required in ESM!
import { protectedRoute } from './middlewares/authMiddlewares.js';

// Connect to database
const app = express();
connectDB().then(() => {app.listen(PORT, () => console.log(`Server running on port ${PORT}`));});
//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
//public routes
app.use('/api/auth', authRoute);
//private routes
app.use(protectedRoute);
app.use('/api/user', userRoute);
const PORT = process.env.PORT || 5000;
