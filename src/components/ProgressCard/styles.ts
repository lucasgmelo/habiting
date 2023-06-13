import styled from "styled-components";

export const Wrapper = styled.div<{ progress?: string }>`
  padding: 24px;

  position: relative;
  width: 100%;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.main};

  border-radius: 5px;

  &::after {
    content: "";
    position: absolute;

    bottom: 0;
    left: 0;

    height: 2px;
    width: ${({ progress }) => `${progress}%`};

    background: ${({ theme }) => theme.colors.primary};
    border-radius: 0 5px 5px 5px;
  }
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.sizes.small};

  margin: 0;
`;

export const Progress = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;

  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.gray};

  margin: 16px 0;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.main};
  border-radius: 4px;

  border: none;
  padding: 8px 16px;
  cursor: pointer;

  position: absolute;
  right: 16px;
  top: 16px;
`;

export const Done = styled.div`
  color: ${({ theme }) => theme.colors.darkDarkPrimary};
  background: ${({ theme }) => theme.colors.cleanPrimary};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  font-family: "Inter", sans-serif;

  width: fit-content;

  padding: 8px;
  border-radius: 5px;

  position: absolute;
  right: 16px;
  top: 16px;

  box-shadow: ${({ theme }) => theme.shadows.main};
`;
