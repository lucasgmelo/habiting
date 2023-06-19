import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px 16px;

  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.main};

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
`;
