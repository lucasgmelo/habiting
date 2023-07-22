import { Modal } from "antd";
import styled from "styled-components";

export const Wrapper = styled(Modal)`
  form {
    margin-top: 24px;

    & > p {
      margin: 40px 0 32px;
    }
  }

  .detail {
    font-weight: 500;
  }

  .ant-picker {
    width: 30%;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons {
      display: flex;
      gap: 8px;
    }
  }
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  & > div {
    display: flex;
    flex-direction: column;
  }

  margin: 16px 0 24px;
`;

export const TaskContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: auto;

  display: flex;
  gap: 8px;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.lightGray};

  border-radius: 5px;
  padding: 16px;
`;

export const Task = styled.div`
  padding: 16px 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.main};
  border: ${({ theme }) => `1px solid ${theme.colors.contour}`};

  p:last-of-type {
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
  }
`;

export const ArrowButton = styled.button<{ included: boolean }>`
  outline: none;
  border: ${({ theme }) => `1px solid ${theme.colors.contour}`};
  background: ${({ theme }) => theme.colors.white};

  border-radius: 5px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  transform: ${({ included }) => (included ? "rotate(0)" : "rotate(180deg)")};
  padding: 4px;

  svg {
    fill: ${({ theme, included }) =>
      included ? theme.colors.systemRed : "green"};
  }
`;
