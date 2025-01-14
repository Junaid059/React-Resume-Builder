import React from 'react';
import { Link } from 'react-router-dom';
import { Notebook, Trash2 } from 'lucide-react';

function ResumeCardItem({ resume, onDelete }) {
  const handleDelete = (e) => {
    e.preventDefault(); // Prevent the link from being followed
    onDelete(resume.resumeId);
  };

  return (
    <div className="relative mb-6">
      <Link to={`/dashboard/resume/${resume.resumeId}/edit`} className="block">
        <div className="p-14 bg-secondary flex items-center justify-center h-[240px] w-[200px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md">
          <Notebook />
        </div>
        <h2 className="text-center my-1">{resume.title}</h2>
      </Link>
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full text-red-500 hover:text-red-700 hover:bg-opacity-100 transition-colors duration-200"
        aria-label={`Delete ${resume.title}`}
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}

export default ResumeCardItem;
