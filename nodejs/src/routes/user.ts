import { Router } from 'express';

import * as userCtrl from '../controllers/userController';

const router = Router();

router.get('/', (req, res) => {
  return userCtrl.getCurrentUser(req, res);
});

export default router;
