import ProgressCard from "components/ProgressCard";
import * as S from "./styles";
import CardIcon from "components/CardIcon";
import { Fire, Lightbulb } from "@styled-icons/remix-fill";
import CardChart from "components/CardChart";
import { useActions } from "contexts/useActions/useActions";

const Default = () => {
  const { user, details } = useActions();

  return (
    <S.Wrapper>
      <S.Title>
        Olá, <span>{user.name}</span>. {details.salutation}
      </S.Title>
      <S.Subtitle>{details.day}</S.Subtitle>
      <S.WidgetGrid>
        <CardChart />
        <CardIcon IconComponent={<Fire />} bgColor="#E83F5B">
          <S.WidgetBigTitle>
            Sequência de <span>8 dias</span>
            <br /> consecutivos indo bem!
          </S.WidgetBigTitle>
          <S.WidgetDescription>Seu recorde é 22 dias</S.WidgetDescription>
        </CardIcon>
        <CardIcon IconComponent={<Lightbulb />} bgColor="#FFC779">
          <S.WidgetBigTitle>
            A ação que você tem sido
            <br /> mais consistente foi
          </S.WidgetBigTitle>
          <S.WidgetBigTitle>
            <span>Passear com o cachorro</span>
          </S.WidgetBigTitle>
        </CardIcon>
      </S.WidgetGrid>
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
          progress="2"
          total="2"
          progressPercent="100"
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
          buttonText="Adicionar progresso"
        />
      </S.Grid>
    </S.Wrapper>
  );
};

export default Default;
