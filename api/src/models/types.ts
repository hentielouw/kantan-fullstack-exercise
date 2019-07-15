type JobStatus = 'ASSIGNED' | 'IN_PROGRESS' | 'DONE';

export interface Job {
  id: string;
  status: JobStatus;
  date: string;
  name: string;
  address: string;
}

export interface User {
  name: string;
  email: string;
  photo: string;
}

export interface JobSheet {
  isSafe: boolean;
  co2Alarm: boolean;
  operatingPressure: boolean;
}
