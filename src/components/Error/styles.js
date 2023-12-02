import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const ErrorContainer = styled.div`
  width: auto;
  height: auto;
  background: ${pallete.red.R50};
  min-height: 600px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 5vw;
    margin-bottom: 0px;
    margin-top: 0px;
  }
  p {
    letter-spacing: 0.01em;
    width: 90%;
    max-width: 700px;
    text-align: center;
    line-height: 26px;
  }
`;
