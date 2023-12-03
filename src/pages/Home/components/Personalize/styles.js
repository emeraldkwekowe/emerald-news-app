import styled from "styled-components";
import { pallete } from "../../../../helpers/constants";

export const PersonalizationContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  display: flex;
  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: ${pallete.dark.D500}dd;
  }
  .main {
    width: 97%;
    max-width: 750px;
    height: auto;
    position: absolute;
    background: ${pallete.white};
    z-index: 9;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 30px 40px 50px;
    border-radius: 10px;
    h3 {
      letter-spacing: -0.02em;
      font-size: 25px;
      margin-bottom: 0px;
      margin-top: 0px;
    }
    h4 {
      letter-spacing: -0.02em;
      font-size: 12px;
      margin-top: 30px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: ${pallete.dark.D100};
      border-bottom: 1px solid ${pallete.dark.D50};
      padding-bottom: 10px;
    }
    p {
      letter-spacing: -0.01em;
      font-size: 15px;
      margin-top: 10px;
    }
    .item__a {
      &:hover {
        background: ${pallete.red.R75};
        color: ${pallete.dark.D500};
        svg {
          transform: scale(1.2);
          filter: invert(100%);
          box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.1);
          border-radius: 100%;
          width: ;
        }
      }
    }
  }
`;

export const ModalForm = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 20px 0px;
  input {
    width: 100%;
    font-size: 16px;
    padding: 15px 15px;
    box-sizing: border-box;
    border-radius: 30px;
    border: 1px solid ${pallete.dark.D75};
  }
  button {
    right: 0;
    position: absolute;
  }
`;

export const ModalFooter = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
`;
