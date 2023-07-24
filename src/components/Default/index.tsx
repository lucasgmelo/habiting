import ProgressModal from "components/ProgressModal";
import TaskCard from "components/TaskCard";
import { useActions } from "contexts/useActions/useActions";
import { useState } from "react";
import * as S from "./styles";
import { TasksI } from "contexts/useActions/types";
import ProgressCard from "components/ProgressCard";
import CardChart from "components/CardChart";
import CardIcon from "components/CardIcon";
import { Fire, Lightbulb } from "@styled-icons/remix-fill";

const Default = () => {
  const { user, details } = useActions();

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

  // const = (action: typeof formattedActions) => {
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

  const generalAnalytics = {
    actionsDone: user.tasks.filter((action) => action.status === true).length,
    totalActions: user.tasks.length,
  };

  // const onClickProgress = (action: TasksI) => {
  //   setCurrentAction(action);
  //   setIsProgressModalOpen(true);
  // };

  return (
    <S.Wrapper>
      {/* <ProgressModal
        open={isProgressModalOpen}
        onOk={() => {}}
        action={currentAction}
        closeModal={() => setIsProgressModalOpen(false)}
      /> */}

      <S.Title>
        Olá, <span>{user.name}</span>. {details.salutation}
      </S.Title>
      <S.Subtitle>{details.day}</S.Subtitle>
      <S.WidgetGrid>
        <CardChart
          current={generalAnalytics.actionsDone}
          total={generalAnalytics.totalActions}
        />
        <CardIcon IconComponent={<Fire />} bgColor="#E83F5B">
          <S.WidgetBigTitle>
            Você concluiu um total de <span>8 tarefas</span>
            <br /> nos últimos 7 dias
          </S.WidgetBigTitle>
          <S.WidgetDescription>
            Ser consistente é mais importante do que ser apenas produtivo
          </S.WidgetDescription>
        </CardIcon>
        <CardIcon IconComponent={<Lightbulb />} bgColor="#FFC779">
          <S.WidgetBigTitle>
            Você possui 7 tarefas com prazo para hoje
          </S.WidgetBigTitle>
          <S.WidgetBigTitle>
            <span>Monitore seus hábitos</span>
          </S.WidgetBigTitle>
        </CardIcon>
      </S.WidgetGrid>
      <S.ActionsTitle>Tarefas dos últimos 7 dias</S.ActionsTitle>
      <S.TasksGrid>
        {sortTasks(user.tasks).map((task) => (
          <TaskCard key={task.name} task={task} />
        ))}
      </S.TasksGrid>
    </S.Wrapper>
  );
};

export default Default;
