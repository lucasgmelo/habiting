import EpicCard from "components/EpicCard";
import * as S from "./styles";

const Epics = () => (
  <S.Wrapper>
    <h1>Épicos</h1>
    <h2>Agrupe ações para monitorar o progresso de um grande objetivo</h2>
    <S.EpicsContainer>
      <EpicCard
        name="Atingir X% de massa muscular"
        description="Focos em hábitos saudáveis específico"
        current={3}
        total={9}
      />
    </S.EpicsContainer>
  </S.Wrapper>
);

export default Epics;
