import styled from "styled-components";

export const MainContentContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
