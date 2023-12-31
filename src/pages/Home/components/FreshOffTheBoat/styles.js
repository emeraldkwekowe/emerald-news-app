import styled from "styled-components";

export const MainContentContainer = styled.div`
  width: auto;
  min-height: 820px;
  height: auto;
  display: flex;
  padding: 0px 30px 10px;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  @media (max-width: 750px) {
    h1 {
      display: none;
    }
  }
`;

export const LeftSection = styled.div`
  width: 69%;
  h1 {
    font-size: 6.24vw;
    letter-spacing: -0.05em;
    margin-top: 0;
    margin-bottom: 24px;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  width: 28%;
  @media (max-width: 1100px) {
    width: 100%;
    display: flex;
    margin-top: 25px;
    a {
      margin: 0;
    }
    a:first-of-type {
      margin-right: 25px;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    a:first-of-type {
      margin: 0px 0px 25px;
    }
  }
`;
