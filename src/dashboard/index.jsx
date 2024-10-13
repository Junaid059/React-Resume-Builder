import React from 'react';
import AddResume from './components/AddResume';

function Dashboard() {
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h1 className="font-bold text-3xl">My Resume</h1>
      <p className="mt-4">Start Creating AI resumes for your next job</p>{' '}
      {/* Add margin */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6">
        {' '}
        {/* Add margin */}
        <AddResume />
      </div>
    </div>
  );
}

export default Dashboard;
