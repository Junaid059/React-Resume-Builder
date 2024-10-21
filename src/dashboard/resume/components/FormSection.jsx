import React, { useState } from 'react';
import PersonnalDetail from './forms/PersonnalDetail.jsx';
import { ArrowRight, ArrowLeft, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

function FormSection() {
  const [activeForm, setActiveForm] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [dataSaved, setDataSaved] = useState(false); // New state to track if data is saved

  // Function to handle "Next" and "Back" buttons
  const handleNext = () => {
    if (enableNext && dataSaved) {
      // Proceed to the next form only if conditions are met
      setActiveForm((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeForm > 1) {
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

        {/* Conditionally rendered Back button if activeForm > 1 */}
        <div>
          {activeForm > 1 && (
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

        {/* Right-aligned Next button, disabled if enableNext is false or data isn't saved */}
        <div>
          <Button
            onClick={handleNext}
            size="sm"
            className="flex items-center border px-3 py-1 text-sm bg-purple-500 text-white rounded-md"
            disabled={!enableNext || !dataSaved} // Disable button based on conditions
          >
            Next
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Conditionally rendering the PersonnalDetail form if activeForm === 1 */}
      {activeForm === 1 && (
        <PersonnalDetail
          setEnableNext={setEnableNext}
          setDataSaved={setDataSaved}
        />
      )}
    </div>
  );
}

export default FormSection;
