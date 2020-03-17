import React from 'react';
import { View, Text, Button } from 'react-native';

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

export const JobDetailCard = ({ job, onStartJob, onFinishJob }: Props) => (
  <View>
    <View>
      <Text>{job.name}</Text>
      <Text>{job.address}</Text>
      <Text>{job.date}</Text>
      <Text>{job.status}</Text>
    </View>
    <View>
      <Button title="START JOB" onPress={onStartJob} />
      <Button title="FINISH JOB" onPress={onFinishJob} />
    </View>
  </View>
);
