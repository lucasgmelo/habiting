import { createContext, useContext, useEffect, useState } from "react";

import {
  ActionsProviderProps,
  ActionsContextData,
  UserI,
  TrackI,
  TasksI,
} from "./types";
import {
  dateFormatterText,
  getAppropriateSalutation,
  getTrackerKey,
} from "utils/formatters";

export const ActionsContext = createContext({} as ActionsContextData);

const defaultTrackI: TrackI = {
  habits: [
    { name: "Tomar o remédio", current: 1, total: 1 },
    { name: "Refeições diárias", current: 2, total: 3 },
    { name: "Bater o ponto", current: 3, total: 4 },
    { name: "Não acumular tarefas - CIn", current: 1, total: 1 },
  ],
  goals: [
    {
      name: "Academia",
      currentToday: 1,
      current: 1,
      total: 15,
      totalToday: 1,
    },
    { name: "Faxina", currentToday: 0, current: 1, total: 4, totalToday: 1 },
    {
      name: "Ler Crianças Índigo",
      currentToday: 0,
      current: 50,
      total: 177,
      totalToday: 10,
    },
  ],
};

const defaultMap = new Map([
  ["2023-06-19", defaultTrackI],
  ["2023-06-20", defaultTrackI],
  ["2023-06-21", defaultTrackI],
  ["2023-06-22", defaultTrackI],
  ["2023-06-23", defaultTrackI],
  ["2023-06-24", defaultTrackI],
  ["2023-06-25", defaultTrackI],
  ["2023-06-26", defaultTrackI],
  ["2023-06-27", defaultTrackI],
  ["2023-06-28", defaultTrackI],
  ["2023-06-29", defaultTrackI],
  ["2023-06-30", defaultTrackI],
  ["2023-06-31", defaultTrackI],
  ["2023-07-01", defaultTrackI],
  ["2023-07-02", defaultTrackI],
  ["2023-07-03", defaultTrackI],
  ["2023-07-04", defaultTrackI],
  ["2023-07-05", defaultTrackI],
  ["2023-07-06", defaultTrackI],
  ["2023-07-07", defaultTrackI],
  ["2023-07-08", defaultTrackI],
  ["2023-07-09", defaultTrackI],
  ["2023-07-10", defaultTrackI],
  ["2023-07-11", defaultTrackI],
  ["2023-07-12", defaultTrackI],
  ["2023-07-13", defaultTrackI],
  ["2023-07-14", defaultTrackI],
  ["2023-07-15", defaultTrackI],
  ["2023-07-16", defaultTrackI],
  ["2023-07-17", defaultTrackI],
  ["2023-07-18", defaultTrackI],
  ["2023-07-19", defaultTrackI],
]);

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
  goals: [
    {
      name: "Academia",
      deadline: new Date(2023, 6, 19).toISOString(),
      current: 1,
      total: 15,
    },
    {
      name: "Faxina",
      deadline: new Date(2023, 6, 19).toISOString(),
      current: 1,
      total: 4,
    },
    {
      name: "Ler Crianças Índigo",
      deadline: new Date(2023, 6, 19).toISOString(),
      current: 50,
      total: 177,
    },
  ],
  tasks: [
    {
      name: "Reiki",
      description: "Sexta, às 9h",
      status: false,
      dateDone: null,
      deadline: new Date(2023, 5, 23).toISOString(),
    },
    {
      name: "Aluguel",
      status: true,
      dateDone: new Date(2023, 5, 19).toISOString(),
    },
    {
      name: "Visitar Mário",
      status: false,
      deadline: new Date(2023, 5, 18).toISOString(),
      dateDone: null,
    },
    {
      name: "Show de Joelma",
      description: "testando 7dias+",
      status: false,
      deadline: new Date(2023, 6, 1).toISOString(),
      dateDone: null,
    },
  ],
};

export function ActionsProvider({
  children,
}: ActionsProviderProps): JSX.Element {
  const [user, setUser] = useState<UserI>(() => {
    if (typeof window === "undefined") return defaultUser;

    const storagedUser: UserI = JSON.parse(
      localStorage.getItem("storagedUser")!
    );

    if (storagedUser) {
      // localStorage.setItem("storagedUser", JSON.stringify(storagedUser));
      return storagedUser;
    }

    // localStorage.setItem("storagedUser", JSON.stringify(defaultUser));
    return defaultUser;
  });

  const [tracker, setTracker] = useState(defaultMap);

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

    console.log(newUserData);

    setUser(newUserData);
  };

  useEffect(() => {
    // localStorage.setItem("storagedUser", JSON.stringify(user));
    console.log(user);
  }, [user]);

  return (
    <ActionsContext.Provider
      value={{ user, tracker, details, createTask, deleteTask, toggleTask }}
    >
      {children}
    </ActionsContext.Provider>
  );
}

export function useActions(): ActionsContextData {
  const context = useContext(ActionsContext);
  return context;
}
