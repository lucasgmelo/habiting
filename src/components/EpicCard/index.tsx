import { FC } from "react";
import * as S from "./styles";
import { Progress } from "antd";

interface EpicCardI {
  name: string;
  description?: string;
  current: number;
  total: number;
}

const EpicCard: FC<EpicCardI> = ({ name, description, current, total }) => (
  <S.Wrapper>
    <h4>{name}</h4>
    <p>{description}</p>
    <span>
      {current.toString()}/{total.toString()}
    </span>
    <Progress percent={Number((current / total).toFixed(2)) * 100} />
  </S.Wrapper>
);

export default EpicCard;
