import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 33px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 23px;
  }

  > div {
    display: flex;
    gap: 14px;
    align-items: center;
    text-align: center;

    span {
      margin-bottom: 5px;
    }
  }

  > button {
    padding: 12px 24px;
    border-radius: 5px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 8px 16px;
    }
  }
`;

export const Add = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Decrease = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
