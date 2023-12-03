import styled from "styled-components";
import { pallete } from "../../../../helpers/constants";

export const LatestInYourCountryContainer = styled.div`
  width: auto;
  height: auto;
  border-radius: 12px;
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
  background: ${pallete.white};
  margin-bottom: 30px;
  padding: 20px;
  h2 {
    margin: 0;
    font-size: 14px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    border-bottom: 1px solid ${pallete.dark.D50};
    font-weight: 500;
    padding-bottom: 10px;
  }
`;
