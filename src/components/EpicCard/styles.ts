import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  background: white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  box-shadow: ${({ theme }) => theme.shadows.main};

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  .ant-progress-bg {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
    height: 12px;
  }
`;
