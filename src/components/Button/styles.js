import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const ButtonContainer = styled.button`
  font-size: 19px;
  height: 50px;
  border-radius: 30px;
  font-weight: 400;
  background: #fff;
  border: 2px solid ${pallete.dark.D300};
  padding: 5px 20px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.4s ease;
  svg {
    height: 20px;
  }
  &.filled {
    background: ${pallete.dark.D300};
    color: #fff;
    padding: 5px 0px;
  }
  &:hover {
    background: ${pallete.dark.D500};
    transform: scale(1.05);
    color: #fff;
    transition: all 0.4s ease;
  }
`;
