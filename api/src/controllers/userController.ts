import { Response, Request } from 'express';

import { user } from '../models/user';

export const getCurrentUser = (req: Request, res: Response) => {
  return res.send(user);
};
