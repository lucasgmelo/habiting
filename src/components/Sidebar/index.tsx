import Logo from "components/Logo";
import * as S from "./styles";

import {
  CheckboxMultiple,
  Home2,
  LineChart,
  Scan,
  Service,
} from "@styled-icons/remix-line";

const Sidebar = () => (
  <S.Wrapper>
    <Logo />

    <S.List>
      <S.Item>
        <Home2 />
        <p>Início</p>
      </S.Item>
      <S.Item active>
        <Scan />
        <p>Dashboard</p>
      </S.Item>
      <S.Item>
        <LineChart />
        <p>Metas</p>
      </S.Item>
      <S.Item>
        <Service />
        <p>Hábitos</p>
      </S.Item>
      <S.Item>
        <CheckboxMultiple />
        <p>Tarefas</p>
      </S.Item>
    </S.List>
  </S.Wrapper>
);

export default Sidebar;
