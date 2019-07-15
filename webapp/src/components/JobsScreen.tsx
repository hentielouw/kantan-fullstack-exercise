import React, { useState, useEffect } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';

import JobCard from './JobCard';
import { getJobs, JobResponse } from '../services/jobsApi';

import './JobsScreen.css';

const JobsScreen = (prop: RouteComponentProps) => {
  const [jobs, setJobs] = useState<JobResponse[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiJobs = await getJobs();
      setJobs(apiJobs);
    };

    fetchJobs();
  }, [setJobs]);

  return (
    <div className="jobs-screen">
      <ul className="job-list">
        {jobs.map(job => (
          <li
            key={job.id}
            className="job-list-item"
            onClick={() => navigate(`/jobs/${job.id}`)}
          >
            <JobCard job={job} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsScreen;
