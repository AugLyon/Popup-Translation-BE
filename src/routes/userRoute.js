import express from 'express';

import { getWords, saveWord } from '../controllers/vocabController.js';

const router = express.Router();

router.post('/save-word' ,saveWord);

router.post('/get-words', getWords);

export default router;