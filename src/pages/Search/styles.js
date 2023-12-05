import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const SearchContainer = styled.div`
  width: auto;
  height: auto;
`;

export const ElementContainer = styled.aside`
  box-shadow: 0px 1.4px 5px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
  background: ${pallete.white};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  .flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  h3 {
    margin: 0;
    font-size: 13.5px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    border-bottom: 1px solid ${pallete.dark.D50};
    font-weight: 700;
    padding-bottom: 7px;
    margin-bottom: 8px;
  }
`;

export const FormDiv = styled.div`
  width: auto;
  height: auto;
  flex-grow: 1;
  padding-top: 10px;
  max-height: 200px;
  overflow: auto;
  label {
    display: block;
    font-weight: 600;
    font-size: 14px;
    margin: 0px 0px 5px;
    display: flex;
    align-items: center;
    letter-spacing: 0.002em;
  }
  input[type="date"],
  input[type="text"] {
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    background: ${pallete.dark.D50}aa;
    border: none;
    border-radius: 8px;
  }
  input[type="checkbox"] {
    height: 17px;
    width: 17px;
    margin-right: 10px;
    margin-left: 0px;
  }
`;
