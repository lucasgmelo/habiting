import { createContext, useContext, useState } from "react";

import {
  dateFormatterText,
  getAppropriateSalutation,
  getTrackerKey,
} from "utils/formatters";
import {
  ActionsContextData,
  ActionsProviderProps,
  EpicsI,
  TasksI,
  UserI,
} from "./types";
import api from "api";
import { message } from "antd";

export const ActionsContext = createContext({} as ActionsContextData);

const defaultUser: UserI = {
  name: "",
  photo: "",
  tasks: [],
  epics: [{ name: "123", description: "123", current: 0, total: 0 }],
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
  const [loadingEpics, setLoadingEpics] = useState(false);
  const [loadingCreatingEpic, setLoadingCreatingEpic] = useState(false);
  const [loadingUpdateTask, setLoadingUpdateTask] = useState(false);

  const [loadingEpic, setLoadingEpic] = useState(false);
  const [epic, setEpic] = useState<EpicsI>();

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
      const newTask: TasksI = {
        id: null,
        name,
        description,
        status: false,
        dueDate: deadline,
        epic: null,
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

  const getEpics = async () => {
    try {
      setLoadingEpics(true);

      const { data } = await api.get("/epics");

      setUser({ ...user, epics: data });
    } catch {
      message.error("Erro ao carregar épicos");
    } finally {
      setLoadingEpics(false);
    }
  };

  const createEpic = async (name: string, description?: string) => {
    try {
      setLoadingCreatingEpic(true);

      const body = {
        name,
        description,
        tasksDone: 0,
        totalTasts: 0,
      };

      const { data } = await api.post("/epics", body);

      console.log(data);
      setUser({ ...user, epics: [...user.epics, data] });
    } catch {
      message.error("Erro ao criar épico");
    } finally {
      setLoadingCreatingEpic(false);
    }
  };

  const getEpic = async (id: string | string[] | undefined) => {
    try {
      setLoadingEpic(true);

      const { data } = await api.get(`/epics/${id}`);

      console.log(data);
      setEpic(data);
    } catch {
      message.error("Erro ao ler épico");
    } finally {
      setLoadingEpic(false);
    }
  };

  const updateTask = async (task: TasksI) => {
    try {
      setLoadingCreatingTask(true);

      const newTask = {
        ...task,
        inProgress: task.status,
        epicId: task.epic,
      };

      const { data } = await api.put(`/tasks/${task.id}`, newTask);

      console.log(data);
    } catch {
      console.error("erro");
    } finally {
      setLoadingCreatingTask(false);
    }
  };

  // const createEpic = async (userId: string) => {
  //   try {
  //     setLoadingEpics(true);

  //     const { data } = await api.get("/epics");

  //     console.log(data);
  //   } catch {
  //     message.error("Erro ao carregar épicos");
  //   } finally {
  //     setLoadingEpics(false);
  //   }
  // };

  return (
    <ActionsContext.Provider
      value={{
        user,
        epic,
        details,
        loadingEpics,
        loadingUpdateTask,
        loadingEpic,
        loadingTasks,
        loadingCreatingTask,
        loadingCreatingEpic,
        getEpic,
        getEpics,
        getTasks,
        createTask,
        createEpic,
        deleteTask,
        toggleTask,
        updateTask,
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
