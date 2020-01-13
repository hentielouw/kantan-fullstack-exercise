import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import JobCard from './JobCard';

it('should render all job props', () => {
  const { getByText } = render(
    <JobCard
      name="Test User"
      address="99 Test Lane"
      date={new Date(2019, 1, 1, 18, 0, 0).toISOString()}
    />
  );

  expect(getByText('Test User')).toBeDefined();
  expect(getByText('99 Test Lane')).toBeDefined();
  expect(getByText('2019-02-01T18:00:00.000Z')).toBeDefined();
});
