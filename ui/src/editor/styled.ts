import styled from "styled-components";

export const EditorContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #1e1e1e;
  padding-top: 4px;
`;

export const Outer = styled.div`
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;
export const Inner = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: absolute;
`;
