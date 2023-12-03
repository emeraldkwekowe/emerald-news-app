import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const ButtonContainer = styled.button`
  font-size: 19px;
  height: 50px;
  border-radius: 30px;
  font-weight: 400;
  background: transparent;
  border: 2px solid ${pallete.dark.D300};
  padding: 5px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.4s ease;
  text-align: center;
  justify-content: center;

  svg {
    height: 20px;
  }
  &.filled {
    background: ${pallete.dark.D300};
    color: ${pallete.white};
    padding: 5px 40px;
    border: unset;
    min-width: 50px;
    &.icon {
      padding: 5px 0px;
    }
    &.white {
      color: ${pallete.dark.D300};
      background-color: ${pallete.white};
    }
    &.red {
      font-weight: 600;
      color: ${pallete.red.R100};
      background-color: ${pallete.red.R75};
      &:hover {
        background-color: ${pallete.red.R100};
        color: #fff;
      }
    }
  }
  &:hover {
    background: ${pallete.dark.D500};
    transform: scale(1.05);
    color: ${pallete.white};
    transition: all 0.4s ease;
  }
  &:disabled {
    background: ${pallete.dark.D75};
    cursor: not-allowed;
  }
`;
