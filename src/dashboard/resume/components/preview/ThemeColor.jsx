import React, { useState, useContext } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { LayoutGrid } from 'lucide-react';
import { resumeInfoContext } from '@/context/resumeInfoContext';

function ThemeColor() {
  const colors = [
    '#FF5733', // Red-Orange
    '#33FF57', // Green
    '#3357FF', // Blue
    '#F1C40F', // Yellow
    '#9B59B6', // Purple
    '#E74C3C', // Red
    '#1ABC9C', // Teal
    '#34495E', // Dark Blue-Gray
    '#2ECC71', // Emerald Green
    '#3498DB', // Sky Blue
    '#E67E22', // Orange
    '#F39C12', // Yellow-Orange
    '#D35400', // Burnt Orange
    '#C0392B', // Crimson
    '#7F8C8D', // Gray
    '#BDC3C7', // Light Gray
    '#ECF0F1', // Off White
    '#95A5A6', // Blue-Gray
    '#16A085', // Green-Teal
    '#27AE60', // Jade Green
    '#2980B9', // Deep Blue
    '#8E44AD', // Violet
    '#2C3E50', // Midnight Blue
    '#FF9FF3', // Light Pink
    '#F368E0', // Magenta
    '#54A0FF', // Light Blue
    '#00D2D3', // Cyan
    '#01A3A4', // Dark Cyan
    '#FF6B6B', // Coral
    '#EE5253', // Salmon
    '#10AC84', // Sea Green
    '#576574', // Dark Gray-Blue
    '#A3CB38', // Lime Green
    '#FFC312', // Saffron
    '#C4E538', // Chartreuse
    '#12CBC4', // Aqua
    '#FDA7DF', // Pastel Pink
    '#ED4C67', // Raspberry
    '#F79F1F', // Amber
    '#A29BFE', // Periwinkle
    '#D980FA', // Lavender
    '#74B9FF', // Soft Blue
    '#81ECEC', // Mint
    '#00CEC9', // Bright Teal
    '#E84393', // Rose
    '#636E72', // Charcoal
    '#55E6C1', // Turquoise
  ];

  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);
  const [selectedColor, setSelectedColor] = useState();
  const onColorSelect = (color) => {
    setSelectedColor(color);
    setResumeInfo({
      ...resumeInfo,
      themeColor: color,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid /> Theme
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <h2 className="mb-2 text-sm font-bold">Select Theme Color</h2>
        <div className="grid grid-cols-5 gap-3">
          {colors.map((item, index) => (
            <div
              onClick={() => onColorSelect(item)}
              className={`h-5 w-5 rounded-full cursor-pointer
           hover:border-black border
           ${selectedColor == item && 'border border-black'}
           `}
              style={{
                background: item,
              }}
            ></div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ThemeColor;
