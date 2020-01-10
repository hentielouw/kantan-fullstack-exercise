import { Router } from 'express';

import * as jobsCtrl from '../controllers/jobsController';

const router = Router();

router.get('/', (req, res) => {
  const jobs = jobsCtrl.getAll();
  res.send(jobs);
});

router.get('/:jobId', (req, res) => {
  const job = jobsCtrl.getById(req.params.jobId);
  if (job) {
    return res.send(job);
  }
  return res.sendStatus(404);
});

export default router;
