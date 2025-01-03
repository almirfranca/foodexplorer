import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  width: 220px;
  height: 310px;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > img {
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
    border-radius: 50%;

    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(1.25);
    }
  }

  > p {
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
