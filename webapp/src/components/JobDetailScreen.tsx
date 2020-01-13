import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';

import JobDetailCard, { JobDetail } from './JobDetailCard';

import './JobDetailScreen.css';

type Props = RouteComponentProps<{ jobId: string }>;

interface State {
  job: JobDetail | undefined;
}

class JobDetailScreen extends Component<Props, State> {
  public state: State = {
    job: undefined
  };

  private onStartJob = () => {
    // TODO: Update backend
  };

  private onFinishJob = () => {
    // TODO: Update backend
  };

  componentDidMount() {
    // TODO: Fetch data from backend

    const { jobId } = this.props;
    if (jobId) {
      this.setState({
        job: {
          name: '???',
          address: '???',
          date: '???',
          status: 'ASSIGNED'
        }
      });
    }
  }

  render() {
    const { job } = this.state;
    return job ? (
      <div className="job-detail-screen">
        <JobDetailCard
          job={job}
          onStartJob={this.onStartJob}
          onFinishJob={this.onFinishJob}
        />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default JobDetailScreen;
