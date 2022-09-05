import { Request, Response } from 'express';
import getQuestionOfDay from '../../services/leetcode-api/methods/question-of-day';

const getQuestionOfTheDayController = async (_req: Request, res: Response) => {
  const result = await getQuestionOfDay();
  return res.json(result);
};

export default getQuestionOfTheDayController;
