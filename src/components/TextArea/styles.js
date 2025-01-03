import styled from "styled-components";

export const Container = styled.textarea`
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
`;
