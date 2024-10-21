import React, { useState } from 'react';
import PersonnalDetail from './forms/PersonnalDetail.jsx';
import { ArrowRight, ArrowLeft, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

function FormSection() {
  const [activeForm, setActiveForm] = useState(1);
  const [enableNext, setEnablNext] = useState(false);

  // Function to handle "Next" and "Back" buttons
  const handleNext = () => {
    setActiveForm((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeForm > 0) {
      setActiveForm((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-4">
        {/* Left-aligned Theme button */}
        <div>
          <button className="flex gap-2 items-center border px-3 py-1 text-sm rounded-md">
            <LayoutGrid />
            Theme
          </button>
        </div>

        {/* Conditionally rendered Back button if activeForm > 0 */}
        <div>
          {activeForm > 0 && (
            <Button
              onClick={handleBack}
              size="sm"
              className="flex items-center gap-2 bg-purple-500 text-white px-3 py-1 rounded-md"
            >
              <ArrowLeft />
              Back
            </Button>
          )}
        </div>

        {/* Right-aligned Next button */}
        <div>
          <Button
            onClick={handleNext}
            size="sm"
            className="flex items-center border px-3 py-1 text-sm bg-purple-500 text-white rounded-md"
          >
            Next
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Conditionally rendering the PersonnalDetail form if activeForm === 1 */}
      {activeForm === 1 && <PersonnalDetail />}
    </div>
  );
}

export default FormSection;
