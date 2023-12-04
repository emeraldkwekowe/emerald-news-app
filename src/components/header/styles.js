import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  p {
    font-size: 15px;
    margin-left: 30px;
    font-weight: 500;
    font-style: italic;
    letter-spacing: -0.01rem;
  }
`;

export const Logo = styled.a`
  color: ${pallete.dark.D500};
  font-weight: 800;
  text-decoration: none;
  font-size: 30px;
  letter-spacing: -0.07rem;
`;
