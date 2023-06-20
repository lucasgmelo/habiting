import ProgressCard from "components/ProgressCard";
import * as S from "./styles";
import CardIcon from "components/CardIcon";
import { Fire, Lightbulb } from "@styled-icons/remix-fill";
import CardChart from "components/CardChart";
import { useActions } from "contexts/useActions/useActions";

const Default = () => {
  const { user, details, tracker } = useActions();

  const formatActions = () => {
    const todayActions = tracker.get(details.todayKey);

    if (todayActions) {
      const goalsActions = todayActions?.goals.map((goal) => {
        return {
          title: goal.name,
          progress: goal.currentToday,
          total: goal.totalToday,
          progressPercent: goal.currentToday / goal.totalToday,
          text:
            goal.currentToday / goal.totalToday === 1
              ? "Concluído"
              : "Adicionar progresso",
        };
      });

      const habitsAction = todayActions?.habits.map((goal) => {
        return {
          title: goal.name,
          progress: goal.current,
          total: goal.total,
          progressPercent: goal.current / goal.total,
          text:
            goal.current / goal.total === 1
              ? "Concluído"
              : "Adicionar progresso",
        };
      });

      return [...goalsActions, ...habitsAction];
    }

    return [];
  };

  const formattedActions = formatActions();

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
        {formattedActions.map((action) => (
          <ProgressCard
            key={action.title}
            title={action.title}
            progress={String(action.progress)}
            total={String(action.total)}
            progressPercent={String(action.progressPercent * 100)}
            buttonText={action.text}
          />
        ))}
      </S.Grid>
    </S.Wrapper>
  );
};

export default Default;
