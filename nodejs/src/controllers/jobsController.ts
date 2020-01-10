import { Response, Request } from 'express';

import { Job } from '../models/types';
import { jobs } from '../models/jobs';

export const getAll = (): Job[] => {
  return jobs;
};

export const getById = (id: string): Job | undefined => {
  const job = jobs.find(job => job.id === id);
  return job;
};
