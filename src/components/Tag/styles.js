import styled from "styled-components";

export const Container = styled.div`
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  max-width: max-content;

  margin-right: 6px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
