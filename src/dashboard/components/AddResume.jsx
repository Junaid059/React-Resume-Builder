import React, { useState } from 'react';
import { PlusSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
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
              <Input className="mt-2" placeholder="Full stack Resume" />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <button onClick={() => setOpenDialog(false)}>Cancel</button>
              <button className="bg-[#8B5CF6] text-white p-3 rounded-md hover:bg-[#6D3FDB] focus:ring-2 focus:ring-[#6D3FDB] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                Create
              </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
