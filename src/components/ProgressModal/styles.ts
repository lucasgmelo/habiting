import { InputNumber, Modal } from "antd";
import styled from "styled-components";

export const Wrapper = styled(Modal)``;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 24px;

  margin-top: 24px;
  width: 100%;
`;

export const Chart = styled.div`
  width: 160px;
  height: 160px;
`;

export const CircleButton = styled.button`
  padding: 12px 16px;
  font-size: 2rem;
  cursor: pointer;

  border-radius: 50%;

  border: none;
  outline: none;
  transition: all 0.3s ease;

  background: ${({ theme }) => theme.colors.darkDarkPrimary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    opacity: 0.9;
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const Input = styled(InputNumber)``;

export const Text = styled.p``;
