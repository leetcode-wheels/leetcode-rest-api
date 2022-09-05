import express from 'express';

import questionController from '../controllers/question';

const router = express.Router();

router.get('/today', questionController.getQuestionOfDayController);

export default router;
