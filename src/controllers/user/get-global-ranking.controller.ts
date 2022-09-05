import { Request, Response } from 'express';
import { getGlobalRanking } from '../../services/leetcode-api';

const getGlobalRankingController = async (req: Request, res: Response) => {
  const { page = 1 } = req.query;
  const result = await getGlobalRanking(Number(page));

  return res.json(result);
};

export default getGlobalRankingController;
