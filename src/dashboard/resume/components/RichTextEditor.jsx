import { useState } from 'react';
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

function RichTextEditor() {
  const [value, setValue] = useState('simple text');

  function onChange(e) {
    setValue(e.target.value);
  }

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
