import EpicCard from "components/EpicCard";
import * as S from "./styles";
import { useActions } from "contexts/useActions/useActions";
import { useEffect } from "react";
import { Spin } from "antd";

const Epics = () => {
  const { user, loadingEpics, getEpics } = useActions();

  useEffect(() => {
    getEpics("1");
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
              name={epic.name}
              description={epic.description}
              current={epic.current}
              total={epic.total}
            />
          ))}
        </S.EpicsContainer>
      )}
    </S.Wrapper>
  );
};

export default Epics;
