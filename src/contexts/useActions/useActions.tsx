import { createContext, useContext, useEffect, useState } from "react";

import {
  ActionsProviderProps,
  ActionsContextData,
  UserI,
  TrackI,
  TasksI,
  GoalI,
  HabitI,
} from "./types";
import {
  dateFormatterText,
  getAppropriateSalutation,
  getTrackerKey,
} from "utils/formatters";

export const ActionsContext = createContext({} as ActionsContextData);

const defaultUser: UserI = {
  name: "Lucas Melo",
  photo:
    "https://pbs.twimg.com/profile_images/1671136321299988483/WYECSKEe_400x400.jpg",
  startDate: new Date("2023-06-19").toISOString(),
  endDate: new Date("2023-07-19").toISOString(),
  habits: [
    {
      name: "Tomar o remédio",
      dayAssigned: "everyday",
      timesADay: 1,
    },
    {
      name: "Tomar o remédio",
      dayAssigned: "everyday",
      timesADay: 3,
    },
    {
      name: "Bater o ponto",
      dayAssigned: "everyday",
      timesADay: 3,
    },
    {
      name: "Não acumular tarefas - CIn",
      dayAssigned: "everyday",
      timesADay: 1,
    },
  ],
  goals: [],
  tasks: [],
};

const updateTracker = (
  goals: GoalI[],
  habits: HabitI[],
  startDate: string,
  endDate: string
) => {
  const map = new Map();

  const startAsDate = new Date(startDate);
  const endAsDate = new Date(endDate);

  while (startAsDate <= endAsDate) {
    const dateString = startAsDate.toISOString().split("T")[0];

    const habitsAndGoals = {
      goals,
      habits,
    };

    map.set(dateString, habitsAndGoals);
    startAsDate.setDate(startAsDate.getDate() + 1);
  }

  return map;
};

export function ActionsProvider({
  children,
}: ActionsProviderProps): JSX.Element {
  const [tracker, setTracker] = useState(new Map());

  const [user, setUser] = useState<UserI>(() => {
    if (typeof window === "undefined") return defaultUser;

    const storagedUser: UserI = JSON.parse(
      localStorage.getItem("storagedUser")!
    );

    if (storagedUser) {
      const storagedTracker = localStorage.getItem("tracker")!;

      if (storagedTracker) {
        const parsedTracker: Map<any, any> = JSON.parse(storagedTracker);
        setTracker(parsedTracker);
      } else {
        setTracker(
          updateTracker(
            storagedUser.goals,
            storagedUser.habits,
            storagedUser.startDate,
            storagedUser.endDate
          )
        );
      }

      // localStorage.setItem("storagedUser", JSON.stringify(storagedUser));
      return storagedUser;
    }

    // localStorage.setItem("storagedUser", JSON.stringify(defaultUser));
    setTracker(
      updateTracker(
        defaultUser.goals,
        defaultUser.habits,
        defaultUser.startDate,
        defaultUser.endDate
      )
    );
    return defaultUser;
  });

  const today = new Date();

  const details = {
    day: dateFormatterText(today),
    salutation: getAppropriateSalutation(today),
    todayKey: getTrackerKey(today),
  };

  const createTask = (
    name: string,
    description?: string,
    deadline?: string
  ) => {
    const newTask: TasksI = {
      name,
      description,
      status: false,
      deadline: deadline,
      dateDone: null,
    };

    const newUserData = {
      ...user,
      tasks: [...user.tasks, newTask],
    };

    setUser(newUserData);
  };

  const deleteTask = (name: string) => {
    const newTasks: TasksI[] = user.tasks.filter((task) => task.name !== name);

    const newUserData = {
      ...user,
      tasks: newTasks,
    };

    setUser(newUserData);
  };

  const toggleTask = (name: string, newStatus: boolean) => {
    const newTasks: TasksI[] = user.tasks.map((task) => {
      if (task.name !== name) return task;

      if (newStatus)
        return {
          ...task,
          status: true,
          dateDone: new Date().toISOString(),
        };

      return { ...task, status: false, dateDone: null };
    });

    const newUserData = {
      ...user,
      tasks: newTasks,
    };

    setUser(newUserData);
  };

  const createGoal = (
    name: string,
    repetitions: string,
    description?: string
  ) => {
    const newGoal: GoalI = {
      name,
      description,
      total: Number(repetitions),
      current: 0,
      deadline: user.endDate,
    };

    const newUserData: UserI = {
      ...user,
      goals: [...user.goals, newGoal],
    };

    setUser(newUserData);
    updateTracker(
      [...user.goals, newGoal],
      user.habits,
      user.startDate,
      user.endDate
    );
  };

  useEffect(() => {
    localStorage.setItem("storagedUser", JSON.stringify(user));
    localStorage.setItem("tracker", JSON.stringify(tracker));
    updateTracker(user.goals, user.habits, user.startDate, user.endDate);
  }, [user]);

  return (
    <ActionsContext.Provider
      value={{
        user,
        tracker,
        details,
        createTask,
        deleteTask,
        toggleTask,
        createGoal,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
}

export function useActions(): ActionsContextData {
  const context = useContext(ActionsContext);
  return context;
}
