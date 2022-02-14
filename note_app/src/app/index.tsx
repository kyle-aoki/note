import React from "react";
import EditorComponent from "../editor";
import StatusBarComponent from "../status-bar";
import TaskBarComponent from "../task-bar";
import { GlobalStyles } from "./global-styles";
import { AppContainer } from "./styled";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        {/* <TaskBarComponent /> */}
        <EditorComponent />
        <StatusBarComponent />
      </AppContainer>
    </>
  );
}
