import { FC } from "react";
import * as S from "./styles";
import dynamic from "next/dynamic";

const Pie = dynamic(() => import("@ant-design/charts").then(({ Pie }) => Pie), {
  ssr: false,
});

interface CardChartI {
  current: number;
  total: number;
}

const CardChart: FC<CardChartI> = ({ current, total }) => {
  const progressPercent = current / total || 0;

  const data = [
    {
      type: "Realizado",
      value: current || 0,
    },
    {
      type: "A realizar",
      value: total - current,
    },
  ];

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    innerRadius: 0.7,
    legend: false,
    color: ["#32B768", "#EDEFF4"],
    label: {
      type: "inner",
      style: {
        fontSize: 0,
      },
    },
    interactions: [],
    statistic: {
      title: "",
      content: {
        style: {
          fontSize: 18,
          fontWeight: 400,
        },
        content: `${Number(progressPercent * 100).toFixed()}%`,
      },
    },
  };

  const content = {
    done: {
      title: "Parabéns! Você finalizou suas tarefas da semana",
      text: "Todas as tarefas foram feitas",
    },
    well: {
      title: "Você está indo bem!",
      text: `Complete ${total - current} tarefas para cumprir a meta semanal`,
    },
    start: {
      title: "A semana pode ser incrível!",
      text: `Complete ${total - current} tarefas para cumprir a meta semanal`,
    },
  };

  return (
    <S.Wrapper>
      <S.Chart>
        {/* @ts-ignore */}
        <Pie {...config} />
      </S.Chart>
      <S.Content>
        <S.Title>
          {
            content[
              progressPercent === 1
                ? "done"
                : progressPercent >= 0.5
                ? "well"
                : "start"
            ].title
          }
        </S.Title>
        <S.Description>
          {
            content[
              progressPercent === 1
                ? "done"
                : progressPercent >= 0.5
                ? "well"
                : "start"
            ].text
          }
        </S.Description>
        <S.Done>
          {current}/{total}
        </S.Done>
      </S.Content>
    </S.Wrapper>
  );
};

export default CardChart;
