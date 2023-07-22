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
import api from "api";
import { message } from "antd";

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

  const [loadingTasks, setLoadingTasks] = useState(false);
  const [loadingCreatingTask, setLoadingCreatingTask] = useState(false);

  const today = new Date();

  const details = {
    day: dateFormatterText(today),
    salutation: getAppropriateSalutation(today),
    todayKey: getTrackerKey(today),
  };

  const getTasks = async () => {
    try {
      setLoadingTasks(true);

      const { data } = await api.get("/tasks");

      setUser({ ...user, tasks: data });
    } catch {
      message.error("Erro ao localizar tasks");
    } finally {
      setLoadingTasks(false);
    }
  };

  const createTask = async (
    name: string,
    description?: string,
    deadline?: string
  ) => {
    try {
      setLoadingCreatingTask(true);
      const newTask: Omit<TasksI, "id"> = {
        name,
        description,
        status: false,
        dueDate: deadline,
        epic: null,
        userId: "1",
      };

      const { data } = await api.post("/tasks", newTask);

      const newUserData = {
        ...user,
        tasks: [...user.tasks, data],
      };

      setUser(newUserData);
    } catch {
      message.error(
        "Não foi possível criar a tarefa, tente novamente mais tarde"
      );
    } finally {
      setLoadingCreatingTask(false);
    }
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
        loadingTasks,
        loadingCreatingTask,
        getTasks,
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
