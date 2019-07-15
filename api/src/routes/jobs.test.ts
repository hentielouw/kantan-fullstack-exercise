import request from 'supertest';
import app from '../app';

import { jobs } from '../models/jobs';

const resetJobModel = () => {
  jobs.splice(0, jobs.length);
  jobs.push(
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
  );
};

describe('GET jobs', () => {
  beforeEach(resetJobModel);

  it('should return a job if the ID exists', async () => {
    const response = await request(app).get('/api/jobs/id123');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: 'id123',
      name: 'Alex',
      address: '123 Job Street',
      status: 'ASSIGNED',
      date: '2019-07-03T15:00:00.000Z'
    });
  });

  it('should return 404 for unknown job IDs', async () => {
    const response = await request(app).get('/api/jobs/unknown');

    expect(response.status).toBe(404);
  });

  it('should return all jobs', async () => {
    const response = await request(app).get('/api/jobs');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
  });
});

xdescribe('PATCH jobs', () => {
  beforeEach(resetJobModel);

  it('should allow transition from ASSIGNED to IN_PROGRESS', async () => {
    const response = await request(app)
      .patch('/api/jobs/id123')
      .send({ status: 'IN_PROGRESS' });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('IN_PROGRESS');
  });

  it('should allow transition from IN_PROGRESS to DONE', async () => {
    const response = await request(app)
      .patch('/api/jobs/id456')
      .send({ status: 'DONE' });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('DONE');
  });

  it('should not allow transition from ASSIGNED to DONE', async () => {
    const response = await request(app)
      .patch('/api/jobs/id123')
      .send({ status: 'DONE' });

    expect(response.status).toBe(400);
  });

  it('should not allow transition from IN_PROGRESS to ASSIGNED', async () => {
    const response = await request(app)
      .patch('/api/jobs/id456')
      .send({ status: 'ASSIGNED' });

    expect(response.status).toBe(400);
  });

  it('should not allow transition from DONE to IN_PROGRESS', async () => {
    const response = await request(app)
      .patch('/api/jobs/id789')
      .send({ status: 'IN_PROGRESS' });

    expect(response.status).toBe(400);
  });
});
