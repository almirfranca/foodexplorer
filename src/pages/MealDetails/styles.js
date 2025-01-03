import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto 77px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 20px 100px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 20px 30px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  /* grid-area: content; */

  > button {
    background: none;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    width: 100%;
    gap: 45px;
    align-items: center;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      flex-direction: column;
    }
  }
`;

export const MealImage = styled.div`
  > img {
    width: 320px;
    height: 320px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 220px;
      height: 220px;
    }

    border-radius: 50%;
  }
`;

export const MealDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    align-items: center;
  }

  #editButton {
    width: max-content;
    border-radius: 5px;
    height: max-content;
    padding: 12px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 100%;
    }
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 22px;
    }
  }

  > p {
    font-weight: 300;
  }

  #ingredients {
    display: flex;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
`;
