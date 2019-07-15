import { Router } from 'express';

import * as jobsCtrl from '../controllers/jobsController';

const router = Router();

router.get('/', (req, res) => {
  return jobsCtrl.getAll(req, res);
});

router.get('/:jobId', (req, res) => {
  return jobsCtrl.getById(req, res);
});

export default router;
