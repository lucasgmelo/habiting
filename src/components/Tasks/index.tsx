import TaskCard from "components/TaskCard";
import * as S from "./styles";

const Tasks = () => (
  <S.Wrapper>
    <h1>Suas tarefas</h1>
    <h2>Aqui é o lugar ideal para adicionar ações únicas de curto prazo</h2>
    <S.TasksGrid>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </S.TasksGrid>
  </S.Wrapper>
);

export default Tasks;
