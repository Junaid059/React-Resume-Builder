import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Button } from '@/components/ui/button';
import { resumeInfoContext } from '@/context/resumeInfoContext';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Download, Share2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      name: '',
      rating: 0,
    },
  ]);
  const { resumeId } = useParams();
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);

  useEffect(() => {
    resumeInfo && setSkillsList(resumeInfo?.skills);
  }, []);

  const handleChange = (index, name, value) => {
    const newEntries = skillsList.slice();
    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillsList([
      ...skillsList,
      {
        name: '',
        rating: 0,
      },
    ]);
  };

  const RemoveSkills = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };

  const onSave = () => {
    const isValid = skillsList.every((item) => item.name && item.rating);

    if (isValid) {
      setResumeInfo({ ...resumeInfo, skills: skillsList });
      toast.success('Details updated!');
    } else {
      toast.error('Please fill in all fields before saving.');
    }
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillsList,
    });
  }, [skillsList]);

  const handleDownload = async () => {
    const resumeElement = document.getElementById('resume-preview');
    if (!resumeElement) {
      toast.error('Resume preview not found');
      return;
    }

    try {
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
      toast.success('Resume downloaded successfully!');
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast.error('Failed to download resume. Please try again.');
    }
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">Skills</h2>
          <p>Add Your top professional key skills</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleDownload} variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </div>

      <div>
        {skillsList.map((item, index) => (
          <div key={index} className="flex flex-col mb-4 border rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <div>
                <label className="text-xs">Name</label>
                <Input
                  className="w-full"
                  defaultValue={item.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </div>
              <Rating
                style={{ maxWidth: 120 }}
                value={item.rating}
                onChange={(v) => handleChange(index, 'rating', v)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewSkills}
            className="text-primary"
          >
            + Add More Skill
          </Button>
          <Button
            variant="outline"
            onClick={RemoveSkills}
            className="text-primary"
          >
            - Remove
          </Button>
        </div>
        <Button onClick={() => onSave()}>Save</Button>
      </div>
    </div>
  );
}

export default Skills;
