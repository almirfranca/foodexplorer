import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;

  > h2 {
    font-size: 26px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 10px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      font-size: 20px;
    }
  }

  .splide__arrow svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 30px;
    height: 30px;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }
`;
