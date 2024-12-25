import { useContext, useState } from 'react';
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  Separator,
  Toolbar,
  EditorProvider,
  Editor,
} from 'react-simple-wysiwyg';
import { resumeInfoContext } from '@/context/resumeInfoContext';

function RichTextEditor({ index }) {
  const { resumeInfo, setResumeInfo } = useContext(resumeInfoContext);
  const [value, setValue] = useState(
    resumeInfo.experience[index]?.workSummary || ''
  );

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <EditorProvider>
      <Editor value={value} onChange={onChange}>
        <Toolbar>
          <BtnUndo />
          <BtnRedo />
          <Separator />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />
          <BtnClearFormatting />
          <Separator />
          <BtnStyles />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}

export default RichTextEditor;
