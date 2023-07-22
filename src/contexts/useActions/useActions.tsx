import { createContext, useContext, useState } from "react";

import {
  dateFormatterText,
  getAppropriateSalutation,
  getTrackerKey,
} from "utils/formatters";
import {
  ActionsContextData,
  ActionsProviderProps,
  TasksI,
  UserI,
} from "./types";

export const ActionsContext = createContext({} as ActionsContextData);

const defaultUser: UserI = {
  name: "Lucas Melo",
  photo:
    "https://pbs.twimg.com/profile_images/1671136321299988483/WYECSKEe_400x400.jpg",
  tasks: [],
};

export function ActionsProvider({
  children,
}: ActionsProviderProps): JSX.Element {
  const [user, setUser] = useState<UserI>(() => {
    if (typeof window === "undefined") return defaultUser;

    const storagedUser: UserI = JSON.parse(
      localStorage.getItem("storagedUser")!
    );

    if (storagedUser) return storagedUser;

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
      id: "test",
      name,
      description,
      status: false,
      dueDate: deadline,
      epic: null,
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

  return (
    <ActionsContext.Provider
      value={{
        user,
        details,
        createTask,
        deleteTask,
        toggleTask,
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
