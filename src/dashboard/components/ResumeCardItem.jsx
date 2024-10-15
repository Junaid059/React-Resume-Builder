import React from 'react';
import { Link } from 'react-router-dom';
import { Notebook } from 'lucide-react';

function ResumeCardItem({ resume }) {
  return (
    <Link to={`/dashboard/resume/${resume.resumeId}/edit`} className="mb-6">
      {' '}
      {/* Adjust margin */}
      <div className="p-14 bg-secondary flex items-center justify-center h-[240px] w-[200px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md">
        <Notebook />
      </div>
      <h2 className="text-center my-1">{resume.title}</h2>
    </Link>
  );
}

export default ResumeCardItem;
