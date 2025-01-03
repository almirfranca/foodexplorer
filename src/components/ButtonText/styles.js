import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  background: none;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 12px;
  }

  > svg {
    margin-right: 4px;
    margin-left: 4px;
  }
`;
