import React from 'react';

function SummaryReview({ resumeInfo }) {
  return (
    <div>
      <p className="text-xs">{resumeInfo?.summary}</p>
    </div>
  );
}

export default SummaryReview;
