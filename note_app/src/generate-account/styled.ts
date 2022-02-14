import styled from "styled-components";

export namespace GA {
  const Pressable = styled.div`
    border-radius: 4px;

    display: grid;
    place-items: center;

    user-select: none;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
    &:active {
      filter: brightness(0.8);
    }
  `;
  const GenericContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: rgb(45, 43, 48);
    color: white;

    width: 350px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    border-radius: 5px;
  `;
  export const Label = styled.div`
    position: relative;
    top: 10px;
    display: grid;
    place-items: center;
    border-radius: 4px;
    color: white;
    font-size: 12px;
    background-color: rgb(45, 43, 48);
    user-select: none;
    width: 180px;
    padding-top: 3px;
  `;
  export const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
  `;

  export const GenerateButton = styled(Pressable)`
    padding: 0px 20px;
    height: 18px;
    background-color: #f77ebb;

    border-radius: 4px;

    font-size: 12px;
    color: white;
  `;

  export const Modal = styled.div`
    border-radius: 8px;
    border: 1px solid rgb(100, 98, 103);
    background-color: rgb(31, 26, 35);

    position: absolute;
    top: 30%;
    left: 50%;

    transform: translate(-50%, -30%);
  `;

  export const Head = styled.div`
    border-radius: 8px;
  `;
  export const Body = styled.div`
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);

    display: flex;
    flex-direction: column;
    gap: 15px;

    align-items: center;


    padding-top: 10px;
    padding-left: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
  `;

  export namespace TaskBar {
    export const Container = styled.div`
      display: flex;
      flex-direction: row;
      gap: 10px;
      background-color: rgb(48, 45, 52);
      width: 100%;
      height: 100%;
      padding-top: 7px;
      padding-bottom: 7px;
      padding-left: 10px;
      padding-right: 10px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    `;
    interface ICircleButton {
      color: string;
    }
    export const CircleButton = styled.div<ICircleButton>`
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: ${(props: ICircleButton) => props.color};
    `;
  }

  export namespace AccountNumber {
    export const Container = styled(GenericContainer)``;
    export const Field = styled.div`
      white-space: nowrap;
      font-family: "Consolas", monospace;
    `;
    export const CopyButton = styled(Pressable)`
      margin-left: auto;
      background-color: #525252;
      padding: 5px 10px;
      width: 40px;
    `;
  }

  export namespace LogIn {
    export const Container = styled(GenericContainer)``;
    export const Input = styled.input.attrs(() => ({
      placeholder: "Log In",
    }))`
      background-color: rgb(45, 43, 48);
      outline: none;
      border: none;

      border-radius: 4px;
      font-family: "Consolas", monospace;
      font-size: 16px;

      color: white;
      width: 100%;
    `;
    export const Button = styled(Pressable)`
      display: grid;
      place-items: center;
      background-color: #456aed;
      padding: 5px 10px;
      white-space: nowrap;
      width: 40px;
    `;
  }
}
