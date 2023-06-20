import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 80px;
`;

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

  margin-top: 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;

  margin-top: 24px;
`;

export const WidgetGrid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1.3fr 1fr 1fr;

  margin-top: 48px;
`;

export const WidgetBigTitle = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  margin-bottom: 16px;

  span {
    font-weight: 600;
  }
`;

export const WidgetDescription = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};

  color: ${({ theme }) => theme.colors.gray};
  font-family: "Inter", sans-serif;
`;
