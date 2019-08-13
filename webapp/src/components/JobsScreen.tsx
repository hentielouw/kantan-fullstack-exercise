import React, { Component } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';

import JobCard from './JobCard';
import { getJobs, JobResponse } from '../services/jobsApi';

import './JobsScreen.css';

interface State {
  jobs: JobResponse[];
}

class JobsScreen extends Component<RouteComponentProps, State> {
  state: State = {
    jobs: []
  };

  public async componentDidMount() {
    const apiJobs = await getJobs();
    this.setState({ jobs: apiJobs });
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
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default JobsScreen;
