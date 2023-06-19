import Logo from "components/Logo";
import * as S from "./styles";

import {
  CheckboxMultiple,
  Home2,
  LineChart,
  Scan,
  Service,
  LightbulbFlash,
} from "@styled-icons/remix-line";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();

  const routes = {
    home: "/",
    dashboard: "/dashboard",
    goals: "/metas",
    habits: "/habitos",
    tasks: "/tarefas",
    epics: "/epicos",
  };

  return (
    <S.Wrapper>
      <Logo />

      <S.List>
        <Link href={routes.home}>
          <S.Item active={router.pathname === routes.home}>
            <Home2 />
            <p>Início</p>
          </S.Item>
        </Link>
        <Link href={routes.dashboard}>
          <S.Item active={router.pathname === routes.dashboard}>
            <Scan />
            <p>Dashboard</p>
          </S.Item>
        </Link>
        <Link href={routes.goals}>
          <S.Item active={router.pathname === routes.goals}>
            <LineChart />
            <p>Metas</p>
          </S.Item>
        </Link>
        <Link href={routes.habits}>
          <S.Item active={router.pathname === routes.habits}>
            <Service />
            <p>Hábitos</p>
          </S.Item>
        </Link>
        <Link href={routes.tasks}>
          <S.Item active={router.pathname === routes.tasks}>
            <CheckboxMultiple />
            <p>Tarefas</p>
          </S.Item>
        </Link>
        <Link href={routes.epics}>
          <S.Item active={router.pathname === routes.epics}>
            <LightbulbFlash />
            <p>Épicos</p>
          </S.Item>
        </Link>
      </S.List>
    </S.Wrapper>
  );
};

export default Sidebar;
