import Checkbox from "components/Checkbox";
import { FC, useState } from "react";
import { formatStringToDate, formatStringToDeadline } from "utils/formatters";
import * as S from "./styles";

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
  const [checked, setChecked] = useState(initialStatus);

  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <S.Wrapper
      checked={checked}
      late={
        !!deadline && !checked
          ? formatStringToDate(String(deadline)) < new Date()
          : false
      }
    >
      {/* {deadline !== undefined && (
        <p className="deadline">
          até {formatStringToDeadline(String(deadline))}
        </p>
      )} */}
      <S.Group>
        <Checkbox checked={checked} onChange={onCheck} />
        <p>{title}</p>
      </S.Group>
      <p>{description}</p>
    </S.Wrapper>
  );
};

export default TaskCard;
