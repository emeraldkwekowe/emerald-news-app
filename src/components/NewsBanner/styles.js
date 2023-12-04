import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const NewsBannerContainer = styled.a`
  text-decoration: none;
  width: auto;
  height: 575px;
  padding: 40px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-size: 100% auto;
  background-color: ${pallete.blue.B50};
  background-position: center;
  transition: all 0.6s ease;

  &:hover {
    background-size: 120% auto;
    h2 {
      span {
        text-decoration: underline;
      }
    }
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    z-index: -1;
    border-radius: inherit;
  }
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
      color: ${pallete.dark.D500};
      &.outline {
        background: unset;
        color: ${pallete.white};
        border: 1px solid ${pallete.white};
      }
    }
  }
  h2 {
    width: 50%;
    font-size: 34px;
    margin: 0;
    span {
      letter-spacing: -0.05em;
      border-radius: 40px;
      background-color: ${pallete.white}dd;
      color: ${pallete.dark.D500};
      padding: 0.225rem 1.5rem;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      line-height: 1.58em;
      font-weight: 600;
    }
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 30px;
  }
  &.small {
    height: 310px;
    margin-bottom: 47px;
    background-size: auto 100%;
    flex-direction: column;
    h2 {
      font-size: 25px;
      width: 90%;
      span {
        line-height: 1.7em;
      }
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
    }
    &:hover {
      background-size: auto 120%;
    }
  }
  &.small:nth-of-type(1) {
    background-image: unset !important;
    div {
      span {
        &.outline {
          border-color: ${pallete.dark.D400};
          color: ${pallete.dark.D400};
        }
      }
    }
    h2 {
      font-size: 29px;
      line-height: 0.1em;
      span {
        padding: 0;
        background: unset;
        line-height: 1.4em;
      }
    }
    &::after {
      display: none;
    }
  }
`;

export const BodyText = styled.div`
  position: absolute;
  left: 5%;
  bottom: 50px;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 0px 1px 0px ${pallete.dark.D500};
  width: 70%;
  color: ${pallete.white};
`;
