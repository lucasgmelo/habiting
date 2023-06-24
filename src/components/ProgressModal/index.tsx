import { GeneralActionI } from "contexts/useActions/types";
import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import dynamic from "next/dynamic";

const Pie = dynamic(() => import("@ant-design/charts").then(({ Pie }) => Pie), {
  ssr: false,
});

interface ProgressModalI {
  open: boolean;
  onOk: () => void;
  action: GeneralActionI | undefined;
  closeModal: () => void;
}

const ProgressModal: FC<ProgressModalI> = ({
  open,
  onOk,
  action,
  closeModal,
}) => {
  const [progress, setProgress] = useState<number | undefined | null>();
  const [total, setTotal] = useState<number | undefined>();

  const progressPercent = (progress! / total!) * 100;

  useEffect(() => {
    if (open) {
      setProgress(action?.progress);
      setTotal(action?.total);
    }
  }, [open]);

  const onSubmit = () => {
    onOk();
    closeModal();
  };

  const data = [
    {
      type: "Realizado",
      value: progress,
    },
    {
      type: "A realizar",
      value: total! - progress!,
    },
  ];

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    innerRadius: 0.7,
    legend: false,
    color: ["#2B7A4B", "#EDEFF4"],
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
        content: `${progressPercent.toFixed()}%`,
      },
    },
  };

  const onChange = (value: number) => {
    setProgress(value);
  };

  return (
    <S.Wrapper open={open} onOk={onSubmit} onCancel={closeModal}>
      <h1>{action?.title}</h1>
      <S.Content>
        <S.Chart>
          {/* @ts-ignore */}
          <Pie {...config} />
        </S.Chart>
        <S.Progress>
          <S.Input
            min={0}
            value={progress}
            type="number"
            // @ts-ignore
            onChange={(value) => setProgress(value)}
          />
          <S.Text>/</S.Text>
          <S.Text>{String(total)}</S.Text>
        </S.Progress>
      </S.Content>
    </S.Wrapper>
  );
};

export default ProgressModal;
