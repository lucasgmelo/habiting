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
  current,
  total,
  onClick,
}) => (
  <S.Wrapper onClick={onClick}>
    <h4>{name}</h4>
    <p>{description}</p>
    <span>
      {current.toString()}/{total.toString()}
    </span>
    <Progress percent={Number((current / total).toFixed(2)) * 100} />
  </S.Wrapper>
);

export default EpicCard;
