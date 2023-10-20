import {Editor} from "monaco-editor";
import { useState } from "react";

const CodeEditor = ({ onChange, language, code, theme }) => {
  const [CodeValue, setCodeValue] = useState(code || "");

  function CodeEditorFunction(value) {
    setCodeValue(value);
    onChange("code", value);
  }

  return (
    <div>
      <div className="text-[20px] overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
        <Editor
          height="85vh"
          width={`100%`}
          language={language || "Javascript"}
          value={CodeValue}
          theme={theme}
          // default="//some-content"
          onChange={CodeEditorFunction}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
