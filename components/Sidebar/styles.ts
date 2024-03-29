// components/Sidebar/styles.ts

import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isOpened: boolean }>`
  background: #ebebfa;
  width: ${(props) => (props.isOpened ? "20vw" : "0vw")};
  transition: width 0.5s;
  overflow: hidden;
`;