import EpicCard from "components/EpicCard";
import * as S from "./styles";
import { useActions } from "contexts/useActions/useActions";
import { useEffect } from "react";
import { Spin } from "antd";
import { useRouter } from "next/router";

const Epics = () => {
  const { user, loadingEpics, getEpics } = useActions();
  const router = useRouter();

  useEffect(() => {
    getEpics();
  }, []);

  return (
    <S.Wrapper>
      <h1>Épicos</h1>
      <h2>Agrupe ações para monitorar o progresso de um grande objetivo</h2>
      {loadingEpics ? (
        <Spin />
      ) : user.epics?.length === 0 ? (
        <p>Você ainda não possui épicos</p>
      ) : (
        <S.EpicsContainer>
          {user.epics?.map((epic) => (
            <EpicCard
              key={epic.name}
              name={epic.name}
              description={epic.description}
              current={epic.current}
              total={epic.total}
              onClick={() => router.push(`/epic/${epic.name}`)}
            />
          ))}
        </S.EpicsContainer>
      )}
    </S.Wrapper>
  );
};

export default Epics;
