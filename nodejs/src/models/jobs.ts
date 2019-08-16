import { Job } from './types';

export const jobs: Job[] = [
  {
    id: 'id123',
    address: '123 Job Street',
    name: 'Alex',
    status: 'ASSIGNED',
    date: '2019-07-03T15:00:00.000Z'
  },
  {
    id: 'id456',
    address: '15 Boiler Avenue',
    name: 'Billie',
    status: 'IN_PROGRESS',
    date: '2019-07-02T16:00:00.000Z'
  },
  {
    id: 'id789',
    address: '24 Service Close',
    name: 'Carl',
    status: 'DONE',
    date: '2019-07-01T11:00:00.000Z'
  }
];
