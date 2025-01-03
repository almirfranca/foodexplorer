import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;

  background-color: white;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 40px 20px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      display: flex;
    }

    > span {
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;
  }

  #buttons {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;

    > a {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      padding: 8px 0;
    }

    > button {
      display: flex;
      border: none;
      background: none;

      > span {
        display: flex;
        align-items: start;
        width: 100%;
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        padding: 8px 0;
      }
    }
  }
`;
