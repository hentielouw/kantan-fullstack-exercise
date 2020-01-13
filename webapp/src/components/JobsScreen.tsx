import React, { Component } from 'react';
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

interface State {
  jobs: JobSummary[];
}

class JobsScreen extends Component<RouteComponentProps, State> {
  state: State = {
    jobs: []
  };

  public async componentDidMount() {
    const apiJobs = await getJobs();
    const jobs = apiJobs.map(job => {
      return {
        id: job.id,
        name: job.name,
        address: job.address,
        date: job.date
      };
    });
    this.setState({ jobs });
  }

  public render() {
    return (
      <div className="jobs-screen">
        <ul className="job-list">
          {this.state.jobs.map(job => (
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
  }
}

export default JobsScreen;
