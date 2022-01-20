import React from "react";
import GenerateAccountComponent from "../generate-account";
import { StatusBarContainer } from "./styled";

export default function StatusBarComponent() {
  return (
    <>
      <StatusBarContainer>
        <GenerateAccountComponent />
      </StatusBarContainer>
    </>
  );
}
