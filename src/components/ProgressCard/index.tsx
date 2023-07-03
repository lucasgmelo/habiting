import { FC } from "react";
import * as S from "./styles";

interface ProgressCardI {
  title: string;
  total: string;
  progressPercent?: string;
  progress?: string;
  buttonText: string;
  onClickProgress: () => void;
}

const ProgressCard: FC<ProgressCardI> = ({
  title,
  total,
  buttonText,
  progress = "0",
  progressPercent = "0",
  onClickProgress,
}) => {
  return (
    <S.Wrapper progress={progressPercent}>
      <S.Title>{title}</S.Title>
      <S.Progress>
        {progress}/{total}
      </S.Progress>
      {progressPercent === "100" ? (
        <S.Done>Concluído</S.Done>
      ) : (
        <S.Button onClick={onClickProgress}>{buttonText}</S.Button>
      )}
    </S.Wrapper>
  );
};

export default ProgressCard;
