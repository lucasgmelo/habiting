import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};

  padding: 32px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 32px;

  place-content: center;

  height: 100%;

  position: relative;

  svg.logo {
    position: absolute;

    top: 32px;
    left: 32px;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const FormContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 80px;
`;

export const Buttons = styled.div`
  margin-top: 60px;

  display: flex;
  gap: 16px;

  button {
    display: flex;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  svg {
    height: 20px;
  }
`;

export const Divider = styled.div`
  margin: 32px 0;

  width: 100%;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  grid-gap: 16px;

  opacity: 0.85;

  p {
    color: ${({ theme }) => theme.colors.cleanGray};
    font-size: 1.4rem;
  }

  span {
    height: 1px;
    width: 100%;

    background: ${({ theme }) => theme.colors.cleanGray};
  }
`;

export const Container = styled.div`
  form button {
    background: ${({ theme }) => theme.colors.darkPrimary};
  }

  & > p {
    margin-top: 60px;

    a {
      text-decoration: none;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.darkPrimary};
    }
  }
`;

export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.colors.darkPrimary};
  border-radius: 24px;

  color: white;

  padding: 0 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    max-width: 450px;
  }

  p {
    margin-top: 24px;
  }
`;

export const Card = styled.div`
  height: 424px;
  width: 80%;

  border-radius: 16px;

  margin-top: 80px;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.secondary};

  position: relative;

  &::after {
    position: absolute;
    content: "";

    top: 60px;
    right: -30%;

    width: 40%;
    height: 300px;

    border-radius: 16px;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.secondary};
  }
`;
