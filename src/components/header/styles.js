import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const HeaderContainer = styled.header`
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 25px 30px;
  flex-wrap: wrap;
  &.filled {
    background: ${pallete.white}77;
    height: auto;
    box-shadow: 0px 0.7px 3px rgba(0, 0, 0, 0.05);
  }
  a {
    text-decoration: none;
  }
  p {
    font-size: 15px;
    margin-left: 30px;
    font-weight: 500;
    font-style: italic;
    letter-spacing: -0.01rem;
  }
  form {
    width: 100%;
    max-width: 800px;
    min-width: 300px;
    height: 50px;
    display: flex;
    position: relative;
    input {
      width: 100%;
      font-size: 16px;
      padding: 15px 15px;
      box-sizing: border-box;
      border-radius: 30px;
      background: transparent;
      border: 1px solid ${pallete.dark.D75}99;
    }
    button {
      font-size: 16px;
      position: absolute;
      right: 0;
      font-weight: 700;
    }
  }

  @media (max-width: 1100px) {
    .___hidden_on_responsive {
      display: none;
    }
  }
`;

export const Logo = styled.span`
  color: ${pallete.dark.D500};
  font-weight: 800;
  text-decoration: none;
  font-size: 30px;
  letter-spacing: -0.07rem;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
`;
