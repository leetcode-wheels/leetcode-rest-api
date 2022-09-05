import express from 'express';

import userController from '../controllers/user';

const router = express.Router();

router.get('/profile/:username', userController.getUserProfileController);

router.get('/global-ranking', userController.getGlobalRankingController);

export default router;
