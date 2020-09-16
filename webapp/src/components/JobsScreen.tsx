import React from 'react';
import { RouteComponentProps, navigate } from '@reach/router';

import JobCard from './JobCard';
import { getJobs } from '../services/jobsApi';

import './JobsScreen.css';

type JobSummary = {
  id: string;
  name: string;
  address: string;
  date: string;
};

const JobsScreen: React.FC<RouteComponentProps> = () => {
  const [jobs, setJobs] = React.useState<JobSummary[]>([]);

  React.useEffect(() => {
    async function fetchJobs() {
      const apiJobs = await getJobs();
      const jobs = apiJobs.map((job) => {
        return {
          id: job.id,
          name: job.name,
          address: job.address,
          date: job.date,
        };
      });
      setJobs(jobs);
    }
    fetchJobs();
  }, []);

  return (
    <div className="jobs-screen">
      <ul className="job-list">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="job-list-item"
            onClick={() => navigate(`/jobs/${job.id}`)}
          >
            <JobCard name={job.name} address={job.address} date={job.date} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsScreen;
