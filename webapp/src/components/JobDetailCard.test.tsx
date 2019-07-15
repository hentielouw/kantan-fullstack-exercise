import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import { JobResponse } from '../services/jobsApi';
import JobDetailCard from './JobDetailCard';

it('should render all job values except ID', () => {
  const job: JobResponse = {
    id: 'abc',
    name: 'Test User',
    address: '99 Test Lane',
    date: new Date(2019, 1, 1, 18, 0, 0).toISOString(),
    status: 'ASSIGNED'
  };

  const { getByText, queryByText } = render(
    <JobDetailCard job={job} onStartJob={() => {}} onFinishJob={() => {}} />
  );

  expect(queryByText('abc')).toBeNull();
  expect(getByText('Test User')).toBeDefined();
  expect(getByText('99 Test Lane')).toBeDefined();
  expect(getByText('2019-02-01T18:00:00.000Z')).toBeDefined();
  expect(getByText('ASSIGNED')).toBeDefined();
  expect(getByText('START JOB')).toBeDefined();
  expect(getByText('FINISH JOB')).toBeDefined();
});

it('should trigger "start job" callback when clicked', () => {
  const job: JobResponse = {
    id: 'abc',
    name: 'Test User',
    address: '99 Test Lane',
    date: new Date(2019, 1, 1, 18, 0, 0).toISOString(),
    status: 'ASSIGNED'
  };

  const startJobFn = jest.fn();
  const { getByText } = render(
    <JobDetailCard job={job} onStartJob={startJobFn} onFinishJob={jest.fn} />
  );

  fireEvent.click(getByText('START JOB'));

  expect(startJobFn).toHaveBeenCalled();
});

it('should trigger "finish job" callback when clicked', () => {
  const job: JobResponse = {
    id: 'abc',
    name: 'Test User',
    address: '99 Test Lane',
    date: new Date(2019, 1, 1, 18, 0, 0).toISOString(),
    status: 'ASSIGNED'
  };

  const finishJobFn = jest.fn();
  const { getByText } = render(
    <JobDetailCard job={job} onStartJob={jest.fn} onFinishJob={finishJobFn} />
  );

  fireEvent.click(getByText('FINISH JOB'));

  expect(finishJobFn).toHaveBeenCalled();
});
