import { Fire, Lightbulb } from "@styled-icons/remix-fill";
import CardChart from "components/CardChart";
import CardIcon from "components/CardIcon";
import ProgressCard from "components/ProgressCard";
import TaskCard from "components/TaskCard";
import { useActions } from "contexts/useActions/useActions";
import { useState } from "react";
import * as S from "./styles";
import ProgressModal from "components/ProgressModal";
import { GeneralActionI, GoalI, HabitI } from "contexts/useActions/types";

const Default = () => {
  const { user, details, tracker } = useActions();

  // const [formattedActions, setFormattedActions] = useState<GeneralActionI[]>(
  //   () => {
  //     const todayActions: { habits: HabitI[]; goals: GoalI[] } = tracker.get(
  //       details.todayKey
  //     ) || { habits: [], goals: [] };

  //     if (todayActions) {
  //       const goalsActions = todayActions?.goals.map((goal) => {
  //         const goalAction = {
  //           title: goal.name,
  //           progress: goal.current,
  //           total: goal.total,
  //           progressPercent: goal.current / goal.total,
  //           text:
  //             goal.current / goal.total === 1
  //               ? "Concluído"
  //               : "Adicionar progresso",
  //         };

  //         return goalAction;
  //       });

  //       const habitsActions = todayActions?.habits.map((habit) => {
  //         console.log(habit);

  //         return {
  //           title: habit.name,
  //           progress: 0,
  //           total: habit.timesADay,
  //           progressPercent: 0 / habit.timesADay,
  //           text:
  //             0 / habit.timesADay === 1 ? "Concluído" : "Adicionar progresso",
  //         };
  //       });

  //       return [...goalsActions, ...habitsActions].sort((a, b) => {
  //         if (a.progressPercent === 1 && !(b.progressPercent === 1)) return 1;
  //         if (!(a.progressPercent === 1) && b.progressPercent === 1) return -1;
  //         return 0;
  //       });
  //     }

  //     return [];
  //   }
  // );
  const [formattedTasks, setFormattedTasks] = useState(user.tasks);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState<GeneralActionI>();

  // const sortActions = (actions: typeof formattedActions) => {
  //   return actions.sort((a, b) => {
  //     if (a.progressPercent === 1 && !(b.progressPercent === 1)) return 1;
  //     if (!(a.progressPercent === 1) && b.progressPercent === 1) return -1;
  //     return 0;
  //   });
  // };

  const sortTasks = (actions: typeof formattedTasks) => {
    return actions.sort((a, b) => {
      if (a.status && !b.status) return 1;
      if (!a.status && b.status) return -1;
      return 0;
    });
  };

  // const generalAnalytics = {
  //   actionsDone: formattedActions.filter(
  //     (action) => action.progressPercent >= 1
  //   ).length,
  //   totalActions: formattedActions.length,
  // };

  const onClickProgress = (action: GeneralActionI) => {
    setCurrentAction(action);
    setIsProgressModalOpen(true);
  };

  return (
    <S.Wrapper>
      <ProgressModal
        open={isProgressModalOpen}
        onOk={() => {}}
        action={currentAction}
        closeModal={() => setIsProgressModalOpen(false)}
      />

      <S.Title>
        Olá, <span>{user.name}</span>. {details.salutation}
      </S.Title>
      <S.Subtitle>{details.day}</S.Subtitle>
      {/* <S.WidgetGrid>
        <CardChart
          current={generalAnalytics.actionsDone}
          total={generalAnalytics.totalActions}
        />
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
            <span>Academia</span>
          </S.WidgetBigTitle>
        </CardIcon>
      </S.WidgetGrid> */}
      <S.ActionsTitle>Ações</S.ActionsTitle>
      <S.Grid>
        {/* {sortActions(formattedActions).map((action) => {
          return (
            <ProgressCard
              key={action.title}
              title={action.title}
              progress={String(action.progress)}
              total={String(action.total)}
              progressPercent={String(action.progressPercent * 100)}
              buttonText={action.text}
              onClickProgress={() => onClickProgress(action)}
            />
          );
        })} */}
      </S.Grid>
      <S.ActionsTitle>Tarefas</S.ActionsTitle>
      <S.TasksGrid>
        {sortTasks(user.tasks).map((task) => (
          <TaskCard
            key={task.name}
            title={task.name}
            initialStatus={task.status}
            description={task.description}
            deadline={task.deadline}
          />
        ))}
      </S.TasksGrid>
    </S.Wrapper>
  );
};

export default Default;
