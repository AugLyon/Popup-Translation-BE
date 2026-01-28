import 'dotenv/config';

import express from 'express';

import connectDB from './config/db.js'; // Note the .js extension—it's required in ESM!

// Connect to database
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));