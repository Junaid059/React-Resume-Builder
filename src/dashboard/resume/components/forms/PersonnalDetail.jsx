import { resumeInfoContext } from '@/context/resumeInfoContext';
import React, { useContext } from 'react';

function PersonnalDetail({ setEnableNext, setDataSaved }) {
  // Accept setDataSaved as a prop
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);

  // Handle input change and update resumeInfo
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Check if all fields are filled
    const allFieldsFilled = Object.values({
      firstName: resumeInfo.firstName || '',
      lastName: resumeInfo.lastName || '',
      jobTitle: resumeInfo.jobTitle || '',
      address: resumeInfo.address || '',
      phone: resumeInfo.phone || '',
      email: resumeInfo.email || '',
    }).every((field) => field.trim() !== '');

    // Update enableNext based on whether all fields are filled
    setEnableNext(allFieldsFilled && dataSaved);
  };

  const onSave = (e) => {
    e.preventDefault(); // Prevent default form submit behavior
    // Here, you can handle form submission (e.g., saving the resumeInfo data)
    console.log('Saved data:', resumeInfo);
    setDataSaved(true); // Set dataSaved to true after saving
    // Check if all fields are filled again to update enableNext
    const allFieldsFilled = Object.values({
      firstName: resumeInfo.firstName || '',
      lastName: resumeInfo.lastName || '',
      jobTitle: resumeInfo.jobTitle || '',
      address: resumeInfo.address || '',
      phone: resumeInfo.phone || '',
      email: resumeInfo.email || '',
    }).every((field) => field.trim() !== '');

    setEnableNext(allFieldsFilled); // Update enableNext based on fields' filled status
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-purple-400 border-t-4 mt-16">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get started with your details here</p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={resumeInfo.firstName || ''} // Add value to make it controlled
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full" // Added classes for visibility
            />
          </div>

          <div>
            <label className="text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={resumeInfo.lastName || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full" // Added classes for visibility
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={resumeInfo.jobTitle || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full" // Added classes for visibility
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <input
              type="text"
              name="address"
              value={resumeInfo.address || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full" // Added classes for visibility
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <input
              type="text"
              name="phone"
              value={resumeInfo.phone || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full" // Added classes for visibility
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email" // Use "email" input type for validation
              name="email"
              value={resumeInfo.email || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full" // Added classes for visibility
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <button
            className="p-4 m-3 rounded-md bg-purple-500 text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonnalDetail;
