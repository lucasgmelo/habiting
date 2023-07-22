import TaskCard from "components/TaskCard";
import { useActions } from "contexts/useActions/useActions";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { Spin, message } from "antd";
import api from "api";

const Tasks = () => {
  const { user, getTasks } = useActions();

  const [loadingTasks, setLoadingTasks] = useState(false);

  useEffect(() => {
    getTasks("1");
  }, []);

  return (
    <S.Wrapper>
      <h1>Suas tarefas</h1>
      <h2>Aqui é o lugar ideal para adicionar ações únicas de curto prazo</h2>
      <S.TasksGrid>
        {loadingTasks ? (
          <Spin />
        ) : (
          user.tasks.map((task) => (
            <TaskCard
              key={task.name}
              title={task.name}
              initialStatus={task.status}
              description={task.description}
              deadline={task.dueDate}
            />
          ))
        )}
      </S.TasksGrid>
    </S.Wrapper>
  );
};

export default Tasks;
