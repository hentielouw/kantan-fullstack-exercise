import React from 'react';
import { RouteComponentProps } from '@reach/router';

import JobDetailCard, { JobDetail } from './JobDetailCard';

import './JobDetailScreen.css';

type Props = RouteComponentProps<{ jobId: string }>;

const JobDetailScreen: React.FC<Props> = ({ jobId }) => {
  const [job, setJob] = React.useState<JobDetail>();

  React.useEffect(() => {
    if (jobId) {
      setJob({
        name: '???',
        address: '???',
        date: '???',
        status: 'ASSIGNED',
      });
    }
  }, [jobId]);

  const onStartJob = () => {
    // TODO: Update backend
  };

  const onFinishJob = () => {
    // TODO: Update backend
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-detail-screen">
      <JobDetailCard
        job={job}
        onStartJob={onStartJob}
        onFinishJob={onFinishJob}
      />
    </div>
  );
};

export default JobDetailScreen;
