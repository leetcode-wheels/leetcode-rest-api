import { Request, Response } from 'express';
import { getUserProfile } from '../../services/leetcode-api';

const getUserProfileController = async (req: Request, res: Response) => {
  const { username } = req.params;
  const result = await getUserProfile(username);

  return res.json(result);
};

export default getUserProfileController;
