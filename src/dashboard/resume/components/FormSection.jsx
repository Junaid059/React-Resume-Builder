import React, { useState } from 'react';
import PersonnalDetail from './forms/PersonnalDetail.jsx';
import { ArrowRight, ArrowLeft, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Summary from './forms/Summary.jsx';

function FormSection() {
  const [activeForm, setActiveForm] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [dataSaved, setDataSaved] = useState(false);

  const handleNext = () => {
    if (enableNext && dataSaved) {
      setActiveForm((prev) => prev + 1);
      setEnableNext(false); // Reset for the next form
      setDataSaved(false); // Reset for the next form
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
        <div>
          <button className="flex gap-2 items-center border px-3 py-1 text-sm rounded-md">
            <LayoutGrid />
            Theme
          </button>
        </div>

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

        <div>
          <Button
            onClick={handleNext}
            size="sm"
            className="flex items-center border px-3 py-1 text-sm bg-purple-500 text-white rounded-md"
            disabled={!enableNext || !dataSaved}
          >
            Next
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Render the forms based on the active step */}
      {activeForm === 1 ? (
        <PersonnalDetail
          setEnableNext={setEnableNext}
          setDataSaved={setDataSaved}
        />
      ) : activeForm === 2 ? (
        <Summary setEnableNext={setEnableNext} setDataSaved={setDataSaved} />
      ) : null}
    </div>
  );
}

export default FormSection;
