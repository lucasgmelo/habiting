import styled from "styled-components";

export const Wrapper = styled.div`
  h2 {
    margin-top: 8px;
    max-width: 720px;
  }

  margin-bottom: 120px;
`;

export const Grid = styled.div`
  margin-top: 48px;

  display: grid;
  grid-template-areas: "first second second" "third second second";
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;

  width: 100%;

  > div {
    &:nth-child(1) {
      grid-area: first;
    }

    &:last-of-type {
      margin-top: 16px;
      grid-area: third;
    }
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;

  background: #fff;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.main};

  grid-area: second;
`;

export const CardIconContent = styled.div`
  span {
    font-weight: 600;
  }

  .description {
    margin-top: 8px;

    font-size: ${({ theme }) => theme.font.sizes.small};
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.gray};

    margin-bottom: 8px;
  }
`;

export const DetailsContainer = styled.div`
  margin-top: 24px;

  h1 {
    margin-bottom: 24px;
  }

  .ant-progress .ant-progress-bg {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;

  padding: 8px 8px;
  border-radius: 5px;

  color: #fff;

  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.main};

  cursor: pointer;

  svg {
    width: 16px;
  }
`;
