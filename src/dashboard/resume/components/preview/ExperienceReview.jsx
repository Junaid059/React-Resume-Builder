function ExperienceReview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      {resumeInfo?.experience?.length > 0 ? (
        resumeInfo.experience.map((experience, index) => (
          <div key={index} className="my-5">
            <h2
              className="text-sm font-bold"
              style={{ color: resumeInfo?.themeColor }}
            >
              {experience?.title}
            </h2>
            <h2 className="text-sm flex justify-between">
              {experience?.companyName}, {experience?.city}, {experience?.state}
              <span>
                {experience?.startDate}{' '}
                {experience?.currentlyWorkin ? 'Present' : experience?.endDate}
              </span>
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: experience?.workSummery || '',
              }}
            ></div>
          </div>
        ))
      ) : (
        <p>No experience data available.</p>
      )}
    </div>
  );
}

export default ExperienceReview;
