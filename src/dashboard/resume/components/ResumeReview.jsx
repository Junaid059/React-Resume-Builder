import { resumeInfoContext } from '@/context/resumeInfoContext';
import React, { useContext } from 'react';
import personnalDetail from './preview/PersonnalDetail';
import SummaryReview from './preview/SummaryReview';
import ExperienceReview from './preview/ExperienceReview';
import EducationalReview from './preview/EducationalReview';
import SkillReview from './preview/SkillReview';

function ResumeReview() {
  const { resumeInfo } = useContext(resumeInfoContext);

  return (
    <div
      id="resume-preview"
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <personnalDetail resumeInfo={resumeInfo} />
      <SummaryReview resumeInfo={resumeInfo} />
      <ExperienceReview resumeInfo={resumeInfo} />
      <EducationalReview resumeInfo={resumeInfo} />
      <SkillReview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumeReview;
