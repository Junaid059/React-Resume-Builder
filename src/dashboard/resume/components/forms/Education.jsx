import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
export default function Education() {
  const [education, setEducation] = useState([
    {
      universityName: '',
      degree: '',
      major: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ]);

  const handleChange = (event, index) => {
    setDataSaved(true);
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Education</h2>
      <p>Add Your Educational Details</p>
      <div>
        {education.map((item, index) => (
          <div key={index} className="border p-3 my-5 rounded-lg">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="">University Name</label>
                <input
                  type="text"
                  name="universityName"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </div>
              <div>
                <label htmlFor="">Degree</label>
                <input
                  type="text"
                  name="Degree"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </div>
              <div>
                <label htmlFor="">Major</label>
                <input
                  type="text"
                  name="Major"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </div>
              <div>
                <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </div>
              <div>
                <label htmlFor="">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </div>
              <div>
                <label>Description</label>
                <Textarea
                  type="text"
                  name="description"
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
