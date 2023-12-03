import styled from "styled-components";
import { pallete } from "../../../../helpers/constants";

export const CategoriesContainer = styled.div`
  width: auto;
  height: auto;
  margin: 20px 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  display: flex;
  border: 0;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  color: #2f323d;
  background-color: ${pallete.dark.D50};
  border-radius: 6px;
  transition: 0.25s;
  letter-spacing: -0.02em;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  text-transform: capitalize;

  &.active {
    color: ${pallete.white};
    background: ${pallete.blue.B200};
  }
  &:hover {
    color: ${pallete.white};
    background: ${pallete.blue.B100};
  }
`;
