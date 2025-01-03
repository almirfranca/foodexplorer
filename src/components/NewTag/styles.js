import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 140px;

  padding: 6px;
  border-radius: 10px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};

  border: ${({ theme, isNew }) =>
    isNew ? ` 1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    /* margin-right: 5px; */

    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  }

  > input {
    width: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    font-size: 14px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
