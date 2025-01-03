import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto 50px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 20px 100px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 20px 20px;
    }
  }
`;

export const LogoGrains = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 160px;
    margin-top: 30px;
  }

  > img {
    position: absolute;
    width: 400px;
    height: 250px;
    z-index: 1;
    left: -34px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 200px;
      height: 160px;
      left: -24px;
    }
  }

  > div {
    width: 100%;
    height: 175px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    position: absolute;
    bottom: 0;
    z-index: 0;
    padding: 0 100px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      height: 140px;
      padding: 0 20px;
    }

    #title {
      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        max-width: 210px;
      }

      #taste {
        font-size: 33px;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
          font-size: 18px;
        }
      }

      > span {
        font-size: 12px;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
