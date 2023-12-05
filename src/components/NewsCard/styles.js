import styled from "styled-components";
import { pallete } from "../../helpers/constants";

export const NewsCardContainer = styled.a`
  width: auto;
  height: auto;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: ${pallete.dark.D500};
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
  background: ${pallete.white};
  margin-bottom: 40px;
  &:hover {
    h3 {
      color: ${pallete.blue.B100};
      text-decoration: underline;
    }
  }
  .image {
    width: 40%;
    margin: 30px 0px 30px 30px;
    overflow: hidden;
    max-height: 390px;
    position: relative;
    img {
      width: 100%;
    }
    div {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0;
    }
  }
  .text {
    width: 55%;
    padding: 20px 40px 20px 40px;
    box-sizing: border-box;
    h3 {
      font-size: 30px;
      line-height: 35px;
      margin-top: 0;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 13px;
      letter-spacing: 0.02em;
      display: flex;
      span {
        font-size: 13px;
        opacity: 0.4;
        margin-left: auto;
      }
    }
    p {
      letter-spacing: 0.02em;
      font-size: 15px;
    }
    .a {
      color: ${pallete.blue.B100};
      font-weight: 800;
    }
  }
  &.small {
    box-shadow: unset;
    border-radius: unset;
    border-bottom: 1px solid ${pallete.dark.D50};
    display: block;
    margin-bottom: 20px;

    h4 {
      font-size: 13px;
      color: ${pallete.dark.D500};
      font-weight: 600;
      letter-spacing: -0.01em;

      span {
        padding-left: 10px;
        color: ${pallete.dark.D75};
      }
    }
    h3 {
      letter-spacing: -0.02em;
      font-size: 17px;
      line-height: 23px;
    }
  }
  @media (max-width: 1200px) {
    padding: 0px;
    .image {
      margin: 20px;
    }
    .text {
      padding: 5px 20px 5px 5px;
    }
    .text {
      h3 {
        font-size: 20px;
        line-height: 25px;
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    .image {
      width: 100%;
      img {
        width: 100%;
        margin: 0;
      }
    }
    .text {
      width: 100%;
    }
  }
`;
