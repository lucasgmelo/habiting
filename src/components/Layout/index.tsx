import { FC, ReactNode } from "react";
import * as S from "./styles";
import { Container } from "components/Container";
import Sidebar from "components/Sidebar";

interface LayoutI {
  children: ReactNode;
}

const Layout: FC<LayoutI> = ({ children }) => (
  <S.Wrapper>
    <Sidebar />
    <Container>{children}</Container>
  </S.Wrapper>
);

export default Layout;
