import React from "react";
import Editor from "@monaco-editor/react";
import { EditorContainer, Inner, Outer } from "./styled";

export default function EditorComponent() {
  return (
    <EditorContainer>
      <Outer>
        <Inner>
          <Editor
            theme="vs-dark"
            defaultLanguage="text/plain"
            defaultValue=""
          />
        </Inner>
      </Outer>
    </EditorContainer>
  );
}
