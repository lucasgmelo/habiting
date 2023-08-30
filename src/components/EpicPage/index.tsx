import { useRouter } from "next/router";
import * as S from "./styles";
import { useActions } from "contexts/useActions/useActions";
import { Fragment, useEffect } from "react";
import { Button, Progress, Spin } from "antd";
import { ArrowLeftS } from "@styled-icons/remix-line";
import TaskCard from "components/TaskCard";

const EpicPage = () => {
  const router = useRouter();
  const { loadingEpic, epic, getEpic } = useActions();

  useEffect(() => {
    getEpic(router.query.id);
  }, []);

  return (
    <S.Wrapper>
      <Button onClick={() => router.push("/epicos")}>
        <ArrowLeftS size={16} color="#2B7A4B" />
        Voltar
      </Button>
      <h1>{router.query.id}</h1>
      {loadingEpic ? (
        <Spin />
      ) : (
        <S.Content>
          <S.Description>
            <h3>description</h3>
            <p>3/9</p>
          </S.Description>
          <Progress percent={Number((3 / 9).toFixed(2)) * 100} />
          <h4>Ações relacionadas</h4>
          <S.TasksGrid>
            <TaskCard
              task={{
                name: "123",
                description: "123",
                status: false,
                id: "123",
                epic: null,
              }}
            />
            <TaskCard
              task={{
                name: "123",
                description: "123",
                status: false,
                id: "123",
                epic: null,
              }}
            />
            <TaskCard
              task={{
                name: "123",
                description: "123",
                status: false,
                id: "123",
                epic: null,
              }}
            />
          </S.TasksGrid>
        </S.Content>
      )}
    </S.Wrapper>
  );
};

export default EpicPage;
