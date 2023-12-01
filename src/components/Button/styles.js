import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const ButtonContainer = styled.button`
  font-size: 19px;
  height: 50px;
  border-radius: 30px;
  font-weight: 400;
  background: ${pallete.white};
  border: 2px solid ${pallete.dark.D300};
  padding: 5px 20px;
  display: flex;
  align-items: center;
  margin-left: 10px;
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
    padding: 5px 0px;
    border: unset;
    min-width: 50px;
    &.white {
      color: ${pallete.dark.D300};
      background-color: ${pallete.white};
    }
  }
  &:hover {
    background: ${pallete.dark.D500};
    transform: scale(1.05);
    color: ${pallete.white};
    transition: all 0.4s ease;
  }
`;
