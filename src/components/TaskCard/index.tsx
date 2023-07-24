import Checkbox from "components/Checkbox";
import { FC, useState } from "react";
import { formatStringToDate, formatStringToDeadline } from "utils/formatters";
import * as S from "./styles";
import { Button, message } from "antd";
import { DeleteBin4, Edit } from "@styled-icons/remix-line";
import { useActions } from "contexts/useActions/useActions";
import EditModal from "components/EditModal";
import { TasksI } from "contexts/useActions/types";

interface TaskCardI {
  task: TasksI;
}

const TaskCard: FC<TaskCardI> = ({ task }) => {
  const { deleteTask, toggleTask, updateTask } = useActions();
  const [checked, setChecked] = useState(task?.status || false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const onCheck = () => {
    toggleTask(task?.name, !checked);
    updateTask({ ...task, status: !task.status });
    setChecked(!checked);
  };

  return (
    <S.Wrapper checked={checked}>
      <EditModal
        open={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
        task={task}
      />

      <S.FloatingContainer
        late={
          !!task?.dueDate && !checked
            ? formatStringToDate(String(task?.dueDate)) < new Date()
            : false
        }
      >
        {task?.dueDate !== undefined && (
          <p className="deadline">
            até {formatStringToDeadline(String(task?.dueDate))}
          </p>
        )}

        <button className="edit" onClick={() => setIsEditModalOpen(true)}>
          <Edit size={16} />
        </button>
        <button
          className="delete"
          onClick={() => {
            deleteTask(task?.name);
            message.success("Tarefa deletada com sucesso!");
          }}
        >
          <DeleteBin4 size={16} />
        </button>
      </S.FloatingContainer>
      <S.Group>
        <Checkbox
          defaultChecked={task?.status}
          checked={checked}
          onChange={onCheck}
        />
        <p>{task?.name}</p>
      </S.Group>
      <p>{task?.description}</p>
    </S.Wrapper>
  );
};

export default TaskCard;
