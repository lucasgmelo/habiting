import Checkbox from "components/Checkbox";
import { FC, useState } from "react";
import { formatStringToDate, formatStringToDeadline } from "utils/formatters";
import * as S from "./styles";
import { Button, Popconfirm, message } from "antd";
import { DeleteBin4, Edit } from "@styled-icons/remix-line";
import { useActions } from "contexts/useActions/useActions";
import EditModal from "components/EditModal";
import { TasksI } from "contexts/useActions/types";

interface TaskCardI {
  task: TasksI;
}

const TaskCard: FC<TaskCardI> = ({ task }) => {
  const { deleteTask, toggleTask, updateTask, getTasks } = useActions();
  const [checked, setChecked] = useState(task?.inProgress || false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const onCheck = () => {
    toggleTask(task?.name, !checked);
    updateTask({ ...task, inProgress: !task.inProgress });
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
        {task?.dueDate !== null && (
          <p className="deadline">
            até {formatStringToDeadline(String(task?.dueDate))}
          </p>
        )}

        <button className="edit" onClick={() => setIsEditModalOpen(true)}>
          <Edit size={16} />
        </button>
        <Popconfirm
          title="Deletar tarefa"
          description="Tem certeza que quer deletar?"
          onConfirm={ async () => {
            await deleteTask(task?.id!);
            await getTasks();
            message.success("Tarefa deletada com sucesso!");
          }}
          onCancel={() => {}}
          okText="Sim"
          cancelText="Não"
        >
          <button className="delete">
            <DeleteBin4 size={16} />
          </button>
        </Popconfirm>
      </S.FloatingContainer>
      <S.Group>
        <Checkbox
          defaultChecked={task?.inProgress}
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
