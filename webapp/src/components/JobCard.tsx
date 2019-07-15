import React from 'react';
import { JobResponse } from '../services/jobsApi';

import './JobCard.css';

interface Props {
  job: JobResponse;
}

const Job = ({ job }: Props) => (
  <div className="job-card">
    <div>{job.name}</div>
    <div>{job.address}</div>
    <div>{job.date}</div>
    <div>{job.status}</div>
  </div>
);

export default Job;
