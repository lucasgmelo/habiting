import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.h1`
  span {
    color: ${({ theme }) => theme.colors.darkPrimary};
  }

  margin-bottom: 8px;
`;

export const Subtitle = styled.h3``;

export const ActionsTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: 400;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;

  margin-top: 24px;
`;
