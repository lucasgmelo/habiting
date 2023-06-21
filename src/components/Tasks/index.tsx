import TaskCard from "components/TaskCard";
import { useActions } from "contexts/useActions/useActions";
import * as S from "./styles";

const Tasks = () => {
  const { user } = useActions();

  return (
    <S.Wrapper>
      <h1>Suas tarefas</h1>
      <h2>Aqui é o lugar ideal para adicionar ações únicas de curto prazo</h2>
      <S.TasksGrid>
        {user.tasks.map((task) => (
          <TaskCard
            key={task.name}
            title={task.name}
            initialStatus={task.status}
            description={task.description}
            deadline={task.deadline}
          />
        ))}
      </S.TasksGrid>
    </S.Wrapper>
  );
};

export default Tasks;
