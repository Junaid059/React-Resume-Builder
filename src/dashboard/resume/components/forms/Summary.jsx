import React, { useContext, useState, useRef, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { resumeInfoContext } from '@/context/resumeInfoContext';
import { toast } from 'sonner';

function Summary({ setEnableNext, setDataSaved }) {
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);

  const [summary, setSummary] = useState(resumeInfo.summary || '');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [summary]);

  const handleSave = (e) => {
    e.preventDefault();
    if (summary.trim()) {
      setResumeInfo((prevInfo) => ({
        ...prevInfo,
        summary,
      }));
      setEnableNext(true);
      setDataSaved(true);
      toast.success('Details updated!');
    } else {
      toast.error('Summary cannot be empty');
    }
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-purple-400 border-t-4 mt-16">
      <h2 className="font-bold text-lg">Summary Details</h2>
      <p className="mt-3">Add a summary for your job title</p>
      <form onSubmit={handleSave}>
        <div className="flex justify-between items-baseline mt-10">
          <label>Add Summary</label>
        </div>

        <Textarea
          ref={textareaRef}
          className="mt-5 resize-none"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
          placeholder="Enter a brief summary for your job title..."
          style={{ overflow: 'hidden' }}
        />

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
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
