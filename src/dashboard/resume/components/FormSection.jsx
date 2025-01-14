import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, LayoutGrid } from 'lucide-react';
import PersonnalDetail from './forms/PersonnalDetail';
import Summary from './forms/Summary';
import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import ThemeColor from './preview/ThemeColor';

function FormSection() {
  const [activeForm, setActiveForm] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  const [dataSaved, setDataSaved] = useState(false);

  const handleNext = () => {
    if (enableNext && dataSaved) {
      setActiveForm((prev) => prev + 1);
      setEnableNext(true);
      setDataSaved(true);
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
          <ThemeColor />
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
      {activeForm === 1 && (
        <PersonnalDetail
          setEnableNext={setEnableNext}
          setDataSaved={setDataSaved}
        />
      )}
      {activeForm === 2 && (
        <Summary setEnableNext={setEnableNext} setDataSaved={setDataSaved} />
      )}
      {activeForm === 3 && (
        <Experience setEnableNext={setEnableNext} setDataSaved={setDataSaved} />
      )}
      {activeForm === 4 && (
        <Education setEnableNext={setEnableNext} setDataSaved={setDataSaved} />
      )}
      {activeForm === 5 && (
        <Skills setEnableNext={setEnableNext} setDataSaved={setDataSaved} />
      )}
    </div>
  );
}

export default FormSection;
