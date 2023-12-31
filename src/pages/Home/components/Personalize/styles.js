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
  .main_container {
    position: absolute;
    width: 100%;
    overflow: auto;
    height: 100%;
    padding-top: 40px;
    .main_content {
      width: 97%;
      max-width: 700px;
      height: auto;
      background: ${pallete.white};
      position: relative;
      z-index: 9;
      left: 0;
      right: 0;
      margin: 100px auto;
      padding: 30px 40px 30px;
      border-radius: 10px;
      box-sizing: border-box;
      svg.close {
        position: absolute;
        right: 0;
        top: 0;
        margin: 20px;
        cursor: pointer;
        opacity: 0.8;
        &:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      }

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
        svg {
          margin-left: 10px;
          width: 15px;
          height: 15px;
          opacity: 0.5;
        }
        &:hover {
          background: ${pallete.red.R100};
          svg {
            transform: scale(1.2);
            filter: invert(100%);
            box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.1);
            border-radius: 100%;
            opacity: 1;
          }
        }
        &.active {
          background: ${pallete.dark.D200};
          &:hover {
            background: ${pallete.dark.D500};
            color: ${pallete.white};
          }
        }
      }
    }
  }
`;

export const ModalFormContainer = styled.div`
  height: auto;
  width: auto;
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

export const ModalFormResults = styled.div`
  height: auto;
  width: auto;
  max-height: 200px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const SuggestedItem = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${pallete.dark.D50}99;
  padding: 1px 20px;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 10px;
  margin-right: 10px;
  p {
    font-weight: 600;
    text-transform: capitalize;
  }
  button {
    font-size: 13px;
    padding: 2px 13px !important;
    height: 26px;
    font-weight: 600;
    border-width: 1px;
    margin-left: 10px;
  }
`;

export const ModalFooter = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
`;

export const ModalBoxContainer = styled.div`
  width: auto;
  height: auto;
  min-height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ModalBox = styled.div`
  flex-grow: 1;
  min-width: 150px;
  width: 21%;
  background: ${pallete.dark.D50};
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  height: 160px;
  transition: all 0.4s ease;
  &:last-of-type {
    margin-right: 0;
  }
  svg {
    height: 30px;
    margin-bottom: 10px;
  }
  h5 {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.01em;
    margin-bottom: 0;
    margin-top: 0;
  }
  p {
    letter-spacing: 0.04em !important;
    font-size: 13px !important;
    width: 86%;
    margin-top: 0;
    margin-bottom: 0;
  }
  &:hover {
    background: ${pallete.dark.D65};
  }
`;
