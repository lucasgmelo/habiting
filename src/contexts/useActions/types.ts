import { ReactNode } from "react";

export interface TasksI {
  id: string | null;
  name: string;
  description?: string;
  inProgress: boolean;
  dueDate?: string;
  epicId: null | string;
  userId?: string;
}

export interface EpicsI {
  id: null | string;
  name: string;
  description?: string;
  tasksDone: number;
  totalTasks: number;
}

export interface UserI {
  name: string;
  photo: string;
  tasks: TasksI[];
  epics: EpicsI[];
  actionsDone: number;
  totalActions: number;
}

export interface ActionsContextData {
  details: {
    day: string;
    salutation: string;
    todayKey: string;
  };
  user: UserI;
  epic: EpicsI | undefined;
  loadingTasks: boolean;
  loadingEpic: boolean;
  loadingEpics: boolean;
  loadingCreatingTask: boolean;
  loadingUpdateTask: boolean;
  loadingDeleteTask: boolean;
  loadingCreatingEpic: boolean;
  getTasks: () => void;
  updateTask: (task: TasksI) => Promise<boolean>;
  getEpic: (id: string | string[] | undefined) => void;
  getEpics: () => void;
  createEpic: (
    name: string,
    description: string,
    tasksDone: number,
    totalTasks: number
  ) => void;
  createTask: (
    name: string,
    description?: string,
    deadline?: string,
    epicId?: string
  ) => void;
  deleteTask: (name: string) => Promise<boolean>;
  toggleTask: (name: string, newStatus: boolean) => void;
}

export interface ActionsProviderProps {
  children: ReactNode;
}
