import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RichTextEditor from '../RichTextEditor';
import { resumeInfoContext } from '@/context/ResumeInfoContext';

const formField = {
  title: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  workSummery: '',
};

function Experience() {
  const [experinceList, setExperinceList] = useState([]);
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);

  useEffect(() => {
    if (resumeInfo?.experience && Array.isArray(resumeInfo.experience)) {
      setExperinceList(resumeInfo.experience);
    } else {
      setExperinceList([]); // Default to empty array
    }
  }, [resumeInfo]);

  const handleChange = (index, event) => {
    const newEntries = [...experinceList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperinceList(newEntries);
    setResumeInfo({ ...resumeInfo, experience: newEntries });
  };

  const handleRichTextEditor = (value, index) => {
    const newEntries = [...experinceList];
    newEntries[index].workSummery = value; // Store the string value in the state
    setExperinceList(newEntries);
    setResumeInfo({ ...resumeInfo, experience: newEntries }); // Update context
  };
  const AddNewExperience = () => {
    setExperinceList([...experinceList, { ...formField }]);
  };

  const RemoveExperience = () => {
    setExperinceList((prevList) => prevList.slice(0, -1));
  };

  const handleSave = () => {
    setResumeInfo({ ...resumeInfo, experience: experinceList });
    alert('Experience saved successfully!');
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Professional Experience</h2>
      <p>Add Your Previous Job Experience</p>
      <div>
        {experinceList.map((item, index) => (
          <div key={index} className="border p-3 my-5 rounded-lg">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs">Position Title</label>
                <Input
                  name="title"
                  value={item.title || ''}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">Company Name</label>
                <Input
                  name="companyName"
                  value={item.companyName || ''}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">City</label>
                <Input
                  name="city"
                  value={item.city || ''}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">State</label>
                <Input
                  name="state"
                  value={item.state || ''}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">Start Date</label>
                <Input
                  type="date"
                  name="startDate"
                  value={item.startDate || ''}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
              <div>
                <label className="text-xs">End Date</label>
                <Input
                  type="date"
                  name="endDate"
                  value={item.endDate || ''}
                  onChange={(event) => handleChange(index, event)}
                />
              </div>
            </div>
            <div className="col-span-2 mt-3">
              <RichTextEditor
                value={item.workSummery || ''} // Ensure string is passed
                onRichTextEditorChange={(value) =>
                  handleRichTextEditor(value, index)
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex gap-2">
          <Button variant="outline" onClick={AddNewExperience}>
            + Add More Experience
          </Button>
          <Button variant="outline" onClick={RemoveExperience}>
            - Remove
          </Button>
        </div>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
}

export default Experience;
