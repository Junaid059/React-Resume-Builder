import React, { useState } from 'react';
import RichTextEditor from '../RichTextEditor';

const formField = {
  title: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  workSummary: '',
};

function Experience() {
  const [experienceList, setExperienceList] = useState([formField]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedExperienceList = [...experienceList];
    updatedExperienceList[index][name] = value;
    setExperienceList(updatedExperienceList);
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-purple-400 border-t-4 mt-16">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add your previous Experience</p>
        <div>
          {experienceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Position Title</label>
                  <input
                    type="text"
                    name="title"
                    value={item.title}
                    onChange={(event) => handleChange(index, event)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <input
                    type="text"
                    name="city"
                    value={item.city}
                    onChange={(event) => handleChange(index, event)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <input
                    type="text"
                    name="state"
                    value={item.state}
                    onChange={(event) => handleChange(index, event)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={item.companyName}
                    onChange={(event) => handleChange(index, event)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={item.startDate}
                    onChange={(event) => handleChange(index, event)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={item.endDate}
                    onChange={(event) => handleChange(index, event)}
                    className="border px-2 py-1 w-full"
                  />
                </div>
                <div className="col-span-2 my-8">
                  <RichTextEditor />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <button variant="outline" className="text-primary">
            + Add more Experience
          </button>
          <button className="p-4 m-3 rounded-md bg-purple-500 text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
