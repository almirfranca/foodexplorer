import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid-area: header;

  #headerGreatScreen {
    display: flex;
    height: 105px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 28px 100px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }

    > button {
      margin-left: 10px;
      font-size: 12px;
      padding: 8px 20px;
      border-radius: 5px;
    }

    > a {
      margin-left: 10px;
      font-size: 14px;
      padding: 8px 20px;
      border-radius: 5px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  }

  #headerSmallScreen {
    display: none;
    height: 105px;
    width: 100%;
    padding: 0 20px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
    }

    #barsButton {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    #logoFoodExplorer {
      display: flex;
      align-items: center;
      gap: 6px;

      > svg {
        color: ${({ theme }) => theme.COLORS.CAKE_100};
      }

      #tittleFoodExplorer {
        font-weight: bold;
      }

      #spanAdmin {
        font-size: 10px;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }

    #orders {
      display: flex;
      position: relative;

      > span {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 12px;
        position: absolute;
        border-radius: 50%;
        width: 22px;
        height: 22px;
        right: -8px;
        top: -8px;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  margin-right: 10px;
  flex-direction: column;
  align-items: end;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;

    > svg {
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    #titleFoodExplorer {
      font-weight: bold;
    }
  }

  #isAdmin {
    font-size: 10px;
    margin-top: -6px;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;

export const SignOut = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Search = styled.div`
  flex: 1;
  max-width: 1000px;
`;
