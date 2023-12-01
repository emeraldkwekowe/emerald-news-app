import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const NewsBannerContainer = styled.div`
  width: auto;
  height: 575px;
  padding: 40px;
  border-radius: 30px;
  background: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      background: ${pallete.white};
      border-radius: 30px;
      text-align: center;
      font-weight: 700;
      padding: 5px 20px;
      letter-spacing: -0.04em;
      margin-bottom: 10px;
      &.outline {
        background: unset;
        color: ${pallete.white};
        border: 1px solid ${pallete.white};
      }
    }
  }
  h2 {
    width: 50%;
    font-size: 40px;
    margin: 0;
    span {
      letter-spacing: -0.05em;
      border-radius: 40px;
      background-color: ${pallete.white};
      color: ${pallete.dark.D500};
      padding: 0.225rem 0.5rem;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 30px;
  }
  &.small {
    height: 322px;
    margin-bottom: 34px;
    flex-direction: column;
    h2 {
      font-size: 25px;
      width: 90%;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
