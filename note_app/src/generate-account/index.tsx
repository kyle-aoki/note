import React from "react";
import { GA } from "./styled";

export default function GenerateAccountComponent() {
  return (
    <>
      <GA.GenerateButton>Generate Account</GA.GenerateButton>
      <Modal></Modal>
    </>
  );
}

function Modal() {
  return (
    <GA.Modal>
      <GA.Head>
        <GA.TaskBar.Container>
          <GA.TaskBar.CircleButton color="rgb(255, 84, 77)" />
          {/* <GA.TaskBar.CircleButton color="rgb(254, 180, 41)" /> */}
          <GA.TaskBar.CircleButton color="rgb(88, 77, 83)" />
          <GA.TaskBar.CircleButton color="rgb(88, 77, 83)" />
        </GA.TaskBar.Container>
      </GA.Head>
      <GA.Body>
        <GA.LabelContainer>
          <GA.Label>Generated Account Number</GA.Label>
          <GA.AccountNumber.Container>
            <GA.AccountNumber.Field>
              1234-5678-1234-5678-1234-5678
            </GA.AccountNumber.Field>
            <GA.AccountNumber.CopyButton>C</GA.AccountNumber.CopyButton>
          </GA.AccountNumber.Container>
        </GA.LabelContainer>

        <GA.LogIn.Container>
          <GA.LogIn.Input />
          <GA.LogIn.Button>↵</GA.LogIn.Button>
        </GA.LogIn.Container>
      </GA.Body>
    </GA.Modal>
  );
}
