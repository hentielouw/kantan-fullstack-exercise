import React from 'react';

import './JobCard.css';

interface Props {
  name: string;
  address: string;
  date: string;
}

const Job = ({ name, address, date }: Props) => (
  <div className="job-card">
    <div>{name}</div>
    <div>{address}</div>
    <div>{date}</div>
  </div>
);

export default Job;
