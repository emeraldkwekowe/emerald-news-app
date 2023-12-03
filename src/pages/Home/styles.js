import styled from "styled-components";

export const MainContentContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  h1 button.filled,
  h2 button.filled,
  h3 button.filled,
  h4 button.filled,
  h5 button.filled {
    text-transform: uppercase;
    float: right;
    font-size: 13px;
    letter-spacing: -0.002em;
    font-weight: 600;
    padding: 0px 30px;
  }
`;
