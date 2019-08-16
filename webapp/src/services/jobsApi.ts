import axios from 'axios';

type JobStatus = 'ASSIGNED' | 'IN_PROGRESS' | 'DONE';

export interface JobResponse {
  id: string;
  status: JobStatus;
  date: string;
  name: string;
  address: string;
}

export const getJobs = async (): Promise<JobResponse[]> => {
  const url = 'http://localhost:8000/api/jobs';
  const response = await axios(url);
  if (response.status === 200) {
    return response.data;
  }
  throw new Error('Failed to fetch jobs');
};

export const getJob = async (id: string) => {
  // TODO: Fetch specific job
};

export const createJob = async (id: string) => {};

export const deleteJob = async (id: string) => {};
