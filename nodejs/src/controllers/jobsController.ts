import { Response, Request } from 'express';

import { jobs } from '../models/jobs';

export const getAll = (req: Request, res: Response) => {
  if (req.query.status) {
    console.log(req.query);
  }
  return res.send(jobs);
};

export const getById = (req: Request, res: Response) => {
  const job = jobs.find(job => job.id === req.params.jobId);
  if (job) {
    return res.send(jobs.find(job => job.id === req.params.jobId));
  }
  return res.sendStatus(404);
};
