import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditResume() {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    // Fetch resume data from localStorage
    const data = localStorage.getItem(`resume-${resumeId}`);
    if (data) {
      setResumeData(JSON.parse(data));
    }
  }, [resumeId]);

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Resume</h1>
      <p>Resume Title: {resumeData.title}</p>
      <p>User Name: {resumeData.userName}</p>
      <p>Email: {resumeData.email}</p>
    </div>
  );
}

export default EditResume;
