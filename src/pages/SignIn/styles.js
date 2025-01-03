import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  justify-content: space-around;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  width: 476px;
  height: 60%;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    background: none;
    padding: 0 30px;
  }

  #logoSmallS {
    display: none;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 16px;
    margin-bottom: 3.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    > div {
      border: none;

      h1 {
        font-size: 30px;
        font-weight: bold;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          font-size: 16px;
        }
      }
    }
  }

  > h1 {
    font-size: 26px;
    font-weight: normal;
    margin-bottom: 30px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }

  > div {
    width: 100%;

    > span {
      font-size: 14x;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > div {
      border: 1px solid white;
    }
  }

  > button {
    margin-bottom: 20px;
  }

  #link {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const LogoSignIn = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  > div {
    h1 {
      font-size: 40px;
      font-weight: normal;
    }
  }
`;
