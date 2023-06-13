import * as S from "./styles";

const CardChart = () => (
  <S.Wrapper>
    <S.Chart />
    <S.Content>
      <S.Title>Você está indo bem!</S.Title>
      <S.Description>
        Complete 3 tarefas para cumprir a meta diária
      </S.Description>
      <S.Done>6/9</S.Done>
    </S.Content>
  </S.Wrapper>
);

export default CardChart;
