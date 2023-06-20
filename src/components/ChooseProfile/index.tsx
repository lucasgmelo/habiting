import Link from "next/link";
import { AddCircle } from "@styled-icons/remix-fill";

import Logo from "components/Logo";
import * as S from "./styles";

import { useActions } from "contexts/useActions/useActions";

const ChooseProfile = () => {
  const { user } = useActions();

  return (
    <S.Wrapper>
      <header>
        <Logo />
        <a>Sair</a>
      </header>
      <S.MainContent>
        <h1>Escolher perfil</h1>
        <S.ProfilesContainer>
          <Link href="/">
            <S.ProfileAvatar>
              <img src={user.photo} alt={user.name} />
              <p>{user.name}</p>
            </S.ProfileAvatar>
          </Link>
          <Link href="/">
            <S.ProfileAvatar noImage>
              <span>Fa</span>
              <p>Faculdade</p>
            </S.ProfileAvatar>
          </Link>
          <S.CreateNewProfile>
            <AddCircle size={80} />
          </S.CreateNewProfile>
        </S.ProfilesContainer>
      </S.MainContent>
    </S.Wrapper>
  );
};

export default ChooseProfile;
