import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import FormSection from '../../components/FormSection';
import { resumeInfoContext } from '@/context/resumeInfoContext';
import dummy from '@/data/dummy';
import ResumeReview from '../../components/ResumeReview';

function EditResume() {
  const navigate = useNavigate();

  // State for form fields
  const [resumeInfo, setResumeInfo] = useState({});

  useEffect(() => {
    setResumeInfo(dummy);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <resumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section  */}
        <FormSection />
        {/* Preview Section  */}
        <ResumeReview />
      </div>
    </resumeInfoContext.Provider>
  );
}

export default EditResume;
