import React, { useContext, useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { resumeInfoContext } from '@/context/resumeInfoContext';

function Summary({ setEnableNext, setDataSaved }) {
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);

  // Initialize state with existing summary from resumeInfo
  const [summary, setSummary] = useState(resumeInfo.summary || '');

  const handleSave = (e) => {
    e.preventDefault(); // Ensure the default form submit action is prevented
    console.log('Saving summary:', summary);

    if (summary.trim()) {
      setResumeInfo((prevInfo) => ({
        ...prevInfo,
        summary,
      }));
      setEnableNext(true); // Enable the "Next" button
      setDataSaved(true); // Mark data as saved
      console.log('Summary saved. EnableNext and DataSaved set to true');
    } else {
      console.log('Summary is empty. Cannot save.');
    }
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-purple-400 border-t-4 mt-16">
      <h2 className="font-bold text-lg">Summary Details</h2>
      <p className="mt-3">Add a summary for your job title</p>
      <form onSubmit={handleSave}>
        <div className="flex justify-between items-baseline mt-10">
          <label>Add Summary</label>
          <button
            type="button"
            className="p-1.5 rounded-lg text-purple-500 border-2 border-purple-400 hover:bg-purple-50 hover:border-purple-500 transition-colors duration-200"
          >
            Generate with AI
          </button>
        </div>

        <Textarea
          className="mt-5"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
          placeholder="Enter a brief summary for your job title..."
        />

        <div className="mt-6 flex justify-end">
          <button
            type="submit" // Ensure this is a submit button
            className="bg-purple-500 rounded-md p-1.5 w-20 text-white hover:bg-blue-400"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Summary;
