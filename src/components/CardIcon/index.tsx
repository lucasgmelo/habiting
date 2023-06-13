import { FC, ReactNode } from "react";
import * as S from "./styles";

interface CardIconI {
  IconComponent: ReactNode;
  bgColor: string;
  children: ReactNode;
}

const CardIcon: FC<CardIconI> = ({ IconComponent, bgColor, children }) => (
  <S.Wrapper>
    <S.IconWrapper bgColor={bgColor}>{IconComponent}</S.IconWrapper>
    {children}
  </S.Wrapper>
);

export default CardIcon;
