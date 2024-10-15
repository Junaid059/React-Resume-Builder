import React, { useState } from 'react';
import { Loader2, PlusSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setresumeTitle] = useState('');
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const onCreate = () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      title: resumeTitle,
      resumeId: uuid,
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
    };

    // Save to localStorage
    localStorage.setItem(`resume-${uuid}`, JSON.stringify(data));

    // Simulate delay and navigate to the Edit page
    setTimeout(() => {
      setLoading(false);
      setOpenDialog(false);
      navigate(`/dashboard/resume/${uuid}/edit`); // Navigate to the edit page
    }, 2000);
  };

  return (
    <div>
      <div
        className="p-10 py-20 border items-center flex justify-center bg-secondary rounded-lg h-[240px] w-[200px] hover:scale-105 transition-all hover:shadow-md cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for resume</p>
              <Input
                className="mt-2"
                placeholder="Full stack Resume"
                onChange={(e) => setresumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <button onClick={() => setOpenDialog(false)}>Cancel</button>
              <button
                className="bg-[#8B5CF6] text-white p-3 rounded-md hover:bg-[#6D3FDB] focus:ring-2 focus:ring-[#6D3FDB] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}
              >
                {loading ? <Loader2 className="animate-spin" /> : 'Create'}
              </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
