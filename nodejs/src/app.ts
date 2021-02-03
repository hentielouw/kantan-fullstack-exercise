import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Register routes
app.use('/api/jobs', routes.jobs);

export default app;
