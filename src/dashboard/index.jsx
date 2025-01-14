import React, { useState, useEffect } from 'react';
import AddResume from './components/AddResume';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    // Retrieve resumes from localStorage
    const resumes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('resume-')) {
        resumes.push({ ...JSON.parse(localStorage.getItem(key)), id: key });
      }
    }
    setResumeList(resumes);
  }, []);

  const handleDeleteResume = (id) => {
    localStorage.removeItem(id);

    setResumeList((prevList) => prevList.filter((resume) => resume.id !== id));
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h1 className="font-bold text-3xl">My Resume</h1>
      <p className="mt-4">Start Creating resumes for your next job</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 mt-10">
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((resume) => (
            <ResumeCardItem
              resume={resume}
              key={resume.id}
              onDelete={() => handleDeleteResume(resume.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
