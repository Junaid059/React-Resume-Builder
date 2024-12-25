import React, { useState } from 'react';
import {
  EditorProvider,
  Editor,
  Toolbar,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  Separator,
} from 'react-simple-wysiwyg';

function RichTextEditor({ value = '', onRichTextEditorChange }) {
  const [editorValue, setEditorValue] = useState(value || ''); // Ensure default value is a string

  const handleChange = (updatedValue) => {
    setEditorValue(updatedValue || ''); // Ensure it updates as a string
    onRichTextEditorChange(updatedValue || ''); // Pass a string to the handler
  };

  return (
    <EditorProvider>
      <Editor
        value={editorValue}
        onChange={(e) => handleChange(e.target.value || '')} // Ensure string is passed
      >
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <Separator />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}

export default RichTextEditor;
