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
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  width: 100%;
  padding: 40px 100px 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 40px 50px 10px;
  }
`;

export const Form = styled.form`
  width: 100%;

  #first-container {
    width: 100%;
    display: flex;
    align-items: start;

    gap: 10px;

    margin-top: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      flex-direction: column;
    }

    #first-field {
      width: 100%;
      max-width: 460px;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        max-width: 100%;
      }

      span {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }

    #second-field {
      width: 100%;
      max-width: 300px;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        max-width: 100%;
      }

      span {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      select {
        cursor: pointer;
        width: 100%;
        padding: 15px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: medium;

        transition: all 0.5s ease;
      }
    }

    #third-field {
      width: 100%;

      span {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      > label {
        display: flex;
        cursor: pointer;
        align-items: center;
        width: max-content;
        transition: filter 0.2s;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
          width: 100%;
        }

        :hover {
          filter: brightness(0.9);
        }

        gap: 10px;
        padding: 13px;
        height: 50px;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 5px;

        > input {
          display: none;
        }
      }
    }
  }

  #second-container {
    width: 100%;
    margin-top: 16px;
    display: flex;
    gap: 10px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      flex-direction: column;
    }

    #first-field {
      width: 100%;

      span {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }

    #second-field {
      width: 100%;
      max-width: 200px;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        max-width: 100%;
      }

      span {
        font-size: 14x;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }
  }

  #third-container {
    width: 100%;
    margin-top: 16px;

    > textarea {
      width: 100%;
      height: 150px;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      border: none;
      resize: none;
      border-radius: 5px;
      padding: 10px;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    span {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  #fourth-container {
    width: 100%;
    display: flex;
    justify-content: end;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      justify-content: center;
    }

    div {
      display: flex;
      gap: 10px;
      width: 360px;

      @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 100%;
      }

      #first-button {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
      }

      #second-button {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }
    }
  }
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: max-content;

  > a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > h1 {
    font-size: x-large;
    font-weight: 400;
  }
`;

export const TagField = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 5px;

  gap: 8px;

  width: 100%;
  min-height: 50px;
  padding: 6px;
`;
