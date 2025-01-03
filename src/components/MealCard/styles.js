import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  width: 220px;
  height: 300px;
  padding: 12px;
  border-radius: 8px;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      &:hover {
        color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }

    > img {
      width: 100px;
      height: 350px;
      margin-bottom: 10px;
      border-radius: 50%;
      overflow: hidden;

      transition: filter 0.3s ease-in-out;

      &:hover {
        filter: brightness(1.25);
      }
    }

    > button:nth-child(3) {
      width: 100%;
      margin-top: 10px;
      display: flex;
      gap: 2px;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      align-items: center;
      font-weight: bold;

      &:hover {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }

      > span {
        font-size: 14px;
        font-weight: normal;
      }
    }

    > p {
      font-size: 10px;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      height: 150px;
      overflow: hidden;
    }

    > span {
      font-size: 14px;
      margin-top: 8px;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;

export const Include = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    gap: 5px;

    span {
      margin-bottom: 5px;
    }
  }

  > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;

    > button {
      height: 30px;
      border-radius: 6px;
      margin-bottom: 20px;
      margin-left: 8px;
      font-weight: 300;
      font-size: 12px;
    }
  }
`;
