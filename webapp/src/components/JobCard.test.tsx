import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import { JobResponse } from '../services/jobsApi';
import JobCard from './JobCard';

it('should render all job values except ID', () => {
  const job: JobResponse = {
    id: 'abc',
    name: 'Test User',
    address: '99 Test Lane',
    date: new Date(2019, 1, 1, 18, 0, 0).toISOString(),
    status: 'ASSIGNED'
  };

  const { getByText, queryByText } = render(<JobCard job={job} />);

  expect(queryByText('abc')).toBeNull();
  expect(getByText('Test User')).toBeDefined();
  expect(getByText('99 Test Lane')).toBeDefined();
  expect(getByText('2019-02-01T18:00:00.000Z')).toBeDefined();
  expect(getByText('ASSIGNED')).toBeDefined();
});
