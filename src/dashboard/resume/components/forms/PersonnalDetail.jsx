import { resumeInfoContext } from '@/context/resumeInfoContext';
import React, { useContext } from 'react';
import { toast } from 'sonner';

function PersonnalDetail({ setEnableNext, setDataSaved }) {
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    const allFieldsFilled = Object.values({
      firstName: resumeInfo.firstName || '',
      lastName: resumeInfo.lastName || '',
      jobTitle: resumeInfo.jobTitle || '',
      address: resumeInfo.address || '',
      phone: resumeInfo.phone || '',
      email: resumeInfo.email || '',
    }).every((field) => field.trim() !== '');

    setEnableNext(allFieldsFilled && setDataSaved);
  };

  const onSave = (e) => {
    e.preventDefault();

    console.log('Saved data:', resumeInfo);
    toast.success('Details updated!');
    setDataSaved(true);

    const allFieldsFilled = Object.values({
      firstName: resumeInfo.firstName || '',
      lastName: resumeInfo.lastName || '',
      jobTitle: resumeInfo.jobTitle || '',
      address: resumeInfo.address || '',
      phone: resumeInfo.phone || '',
      email: resumeInfo.email || '',
    }).every((field) => field.trim() !== '');

    setEnableNext(allFieldsFilled);
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
              defaultValue={resumeInfo?.firstName}
              value={resumeInfo.firstName || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label className="text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              defaultValue={resumeInfo?.lastName}
              value={resumeInfo.lastName || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              defaultValue={resumeInfo?.jobTitle}
              value={resumeInfo.jobTitle || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <input
              type="text"
              name="address"
              defaultValue={resumeInfo?.address}
              value={resumeInfo.address || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <input
              type="text"
              name="phone"
              defaultValue={resumeInfo?.phone}
              value={resumeInfo.phone || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={resumeInfo?.email}
              value={resumeInfo.email || ''}
              required
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
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
