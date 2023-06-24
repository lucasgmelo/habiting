import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;

  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.main};
`;

export const Chart = styled.div`
  width: 140px;
  height: 140px;
`;

export const Content = styled.div``;
export const Title = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};

  font-weight: 500;
  margin: 8px 0 16px;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};

  color: ${({ theme }) => theme.colors.gray};
  font-family: "Inter", sans-serif;

  margin-bottom: 24px;
`;

export const Done = styled.div`
  color: ${({ theme }) => theme.colors.darkDarkPrimary};
  background: ${({ theme }) => theme.colors.cleanPrimary};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  font-family: "Inter", sans-serif;

  width: fit-content;

  padding: 8px;
  border-radius: 5px;

  box-shadow: ${({ theme }) => theme.shadows.main};
`;
