import styled from "styled-components";

export const Wrapper = styled.div<{ checked: boolean }>`
  opacity: ${({ checked }) => (checked ? 0.8 : 1)};

  padding: 24px 16px;

  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: ${({ theme, checked }) =>
    checked ? "none" : theme.shadows.main};
  border: ${({ theme, checked }) =>
    checked ? `1px solid ${theme.colors.contour}` : "1px solid transparent"};

  position: relative;

  & > p {
    font-family: "Inter", sans-serif;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
  }
`;

export const Group = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

export const FloatingContainer = styled.div<{ late?: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  .deadline {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    margin-top: 0px;

    color: ${({ late, theme }) => (late ? theme.colors.systemRed : "inherit")};
  }

  .delete {
    background: transparent;
    cursor: pointer;
    border: none;
    outline: none;

    svg {
      color: ${({ theme }) => theme.colors.gray};

      transition: all 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.systemRed};
      }
    }
  }
`;
