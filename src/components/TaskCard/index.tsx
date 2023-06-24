import Checkbox from "components/Checkbox";
import { FC, useState } from "react";
import { formatStringToDate, formatStringToDeadline } from "utils/formatters";
import * as S from "./styles";
import { Button, message } from "antd";
import { DeleteBin4 } from "@styled-icons/remix-line";
import { useActions } from "contexts/useActions/useActions";

interface TaskCardI {
  initialStatus: boolean;
  deadline?: string;
  title: string;
  description?: string;
}

const TaskCard: FC<TaskCardI> = ({
  deadline,
  title,
  description,
  initialStatus,
}) => {
  const { deleteTask, toggleTask } = useActions();
  const [checked, setChecked] = useState(initialStatus);

  console.log(!!deadline && !checked);

  const onCheck = () => {
    toggleTask(title, !checked);
    setChecked(!checked);
  };

  return (
    <S.Wrapper checked={checked}>
      <S.FloatingContainer
        late={
          !!deadline && !checked
            ? formatStringToDate(String(deadline)) < new Date()
            : false
        }
      >
        {deadline !== undefined && (
          <p className="deadline">
            até {formatStringToDeadline(String(deadline))}
          </p>
        )}

        <button
          className="delete"
          onClick={() => {
            deleteTask(title);
            message.success("Tarefa deletada com sucesso!");
          }}
        >
          <DeleteBin4 size={16} />
        </button>
      </S.FloatingContainer>
      <S.Group>
        <Checkbox
          defaultChecked={initialStatus}
          checked={checked}
          onChange={onCheck}
        />
        <p>{title}</p>
      </S.Group>
      <p>{description}</p>
    </S.Wrapper>
  );
};

export default TaskCard;
