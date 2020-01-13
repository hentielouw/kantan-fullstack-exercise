import React from 'react';

import './JobDetailCard.css';

export type JobDetail = {
  name: string;
  address: string;
  date: string;
  status: 'ASSIGNED' | 'IN_PROGRESS' | 'DONE';
};

interface Props {
  job: JobDetail;
  onStartJob: () => void;
  onFinishJob: () => void;
}

const JobDetailCard = ({ job, onStartJob, onFinishJob }: Props) => (
  <div className="job-detail-card">
    <div className="job-detail-card-info margin-bottom-4">
      <div>{job.name}</div>
      <div>{job.address}</div>
      <div>{job.date}</div>
      <div>{job.status}</div>
    </div>
    <div className="job-detail-card-buttons">
      <button onClick={onStartJob}>START JOB</button>
      <button onClick={onFinishJob}>FINISH JOB</button>
    </div>
  </div>
);

export default JobDetailCard;
