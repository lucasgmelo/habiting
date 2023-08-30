import styled from "styled-components";

export const Wrapper = styled.div`
  & > button {
    background: ${({ theme }) => theme.colors.shape};
    color: #2b7a4b;

    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 16px;

    border: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h4 {
    font-size: 2rem;
    margin-bottom: 2px;
  }

  .ant-progress-bg {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
    height: 12px;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.darkPrimary};
  }
`;

export const TasksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;
