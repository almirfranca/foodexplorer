import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  grid-area: footer;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  padding: 0 100px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 20px;
  }

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const LogoFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  span {
    font-weight: bold;
  }
`;

export const CopyRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    margin-right: -5px;
  }
  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;
