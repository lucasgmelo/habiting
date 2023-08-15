import { FC } from "react";
import * as S from "./styles";
import { Progress } from "antd";
import { EpicsI } from "contexts/useActions/types";

interface EpicCardI extends EpicsI {
  onClick: () => void;
}

const EpicCard: FC<EpicCardI> = ({
  name,
  description,
  totalTasks,
  tasksDone,
  onClick,
}) => {
  console.log(tasksDone, totalTasks);

  return (
    <S.Wrapper onClick={onClick}>
      <h4>{name}</h4>
      <p>{description}</p>
      <span>
        {tasksDone}/{totalTasks?.toString() || "0"}
      </span>
      <Progress percent={Number((tasksDone / totalTasks).toFixed(2)) * 100} />
    </S.Wrapper>
  );
};

export default EpicCard;
