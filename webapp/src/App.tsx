import React from 'react';
import { Router } from '@reach/router';

import JobsScreen from './components/JobsScreen';
import JobDetailScreen from './components/JobDetailScreen';

const App = () => {
  return (
    <Router>
      <JobsScreen path="/" />
      <JobDetailScreen path="jobs/:jobId" />
    </Router>
  );
};

export default App;
