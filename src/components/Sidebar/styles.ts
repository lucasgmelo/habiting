import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  width: 300px;
  padding: 32px 0;

  display: flex;
  flex-direction: column;

  & > svg {
    margin: 0 auto;
  }

  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.sidebar};

  margin-right: 24px;
`;

export const List = styled.ul`
  list-style: none;

  margin-top: 64px;
`;

export const Item = styled.li<{ active?: boolean }>`
  height: 48px;

  cursor: pointer;

  & + li {
    margin-top: 32px;
  }

  font-size: ${({ theme }) => theme.font.sizes.medium};

  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;

  svg {
    width: 24px;
    margin: 0;
    color: ${({ theme }) => theme.colors.darkPrimary};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.gray};
  }

  ${({ active, theme }) =>
    active &&
    css`
      p {
        font-weight: 500;
        color: ${theme.colors.darkPrimary};
      }

      position: relative;

      &::after {
        position: absolute;
        content: "";

        left: 0;

        width: 4px;
        height: 100%;

        background: ${({ theme }) => theme.colors.darkPrimary};
        border-radius: 0 5px 5px 0;
      }
    `}

  &:hover {
    opacity: 0.9;
  }
`;
