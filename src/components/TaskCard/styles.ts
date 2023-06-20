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
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;

    &.deadline {
      position: absolute;
      top: 8px;
      right: 16px;
    }
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
