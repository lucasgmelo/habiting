import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 32px 28px;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: auto 1fr;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 100px;
    }
  }
`;

export const MainContent = styled.div`
  place-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 32px;

  h1 {
    font-size: 2.8rem;
  }
`;

export const ProfilesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  margin-top: 80px;
`;

export const ProfileAvatar = styled.div<{ noImage?: boolean }>`
  border-radius: 5;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  }

  span {
    display: grid;
    place-items: center;

    font-size: 4rem;
    color: ${({ theme }) => theme.colors.mainBg};

    width: 164px;
    height: 164px;

    background: ${({ theme }) => theme.colors.darkPrimary};

    border-radius: 5px;
    border: ${({ theme }) => `12px solid ${theme.colors.contour}`};
  }

  img {
    width: 164px;
    height: 164px;
    object-fit: cover;

    border-radius: 5px;
    border: ${({ theme }) => `12px solid ${theme.colors.contour}`};
  }
`;

export const CreateNewProfile = styled.button`
  background: transparent;
  border: none;
  outline: none;

  margin-bottom: 32px;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  svg {
    color: ${({ theme }) => theme.colors.darkDarkPrimary};
  }
`;
