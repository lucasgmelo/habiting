import ProgressCard from "components/ProgressCard";
import * as S from "./styles";

const Default = () => (
  <S.Wrapper>
    <S.Title>
      Olá, <span>Lucas</span>. Boa tarde!
    </S.Title>
    <S.Subtitle>Sexta-feira, 9 de junho de 2023.</S.Subtitle>
    <S.ActionsTitle>Ações</S.ActionsTitle>
    <S.Grid>
      <ProgressCard
        title="Tomar café da manhã"
        progress="1"
        total="2"
        progressPercent="75"
        buttonText="Concluir"
      />
      <ProgressCard
        title="Tomar café da manhã"
        progress="1"
        total="2"
        progressPercent="75"
        buttonText="Concluir"
      />
      <ProgressCard
        title="Tomar café da manhã"
        progress="1"
        total="2"
        progressPercent="75"
        buttonText="Concluir"
      />
      <ProgressCard
        title="Tomar café da manhã"
        progress="1"
        total="2"
        progressPercent="75"
        buttonText="Concluir"
      />
    </S.Grid>
  </S.Wrapper>
);

export default Default;
