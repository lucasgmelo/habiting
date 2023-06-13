import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 24px 16px;
  border-radius: 5px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.main};

  position: relative;

  width: fit-content;
  min-width: 320px;
`;

export const IconWrapper = styled.div<{ bgColor: string }>`
  padding: 8px;
  border-radius: 5px;
  background: ${({ bgColor }) => bgColor};

  position: absolute;
  top: -20px;

  svg {
    color: ${({ theme }) => theme.colors.white};
    width: 24px;
  }
`;
