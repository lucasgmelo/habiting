import { ReactNode } from "react";

export interface TasksI {
  id: string | null;
  name: string;
  description?: string;
  status: boolean;
  dueDate?: string;
  epic: null | string;
  userId?: string;
}

export interface EpicsI {
  name: string;
  description?: string;
  current: number;
  total: number;
}

export interface UserI {
  name: string;
  photo: string;
  tasks: TasksI[];
  epics: EpicsI[];
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
  loadingCreatingEpic: boolean;
  getTasks: () => void;
  updateTask: (task: TasksI) => void;
  getEpic: (id: string | string[] | undefined) => void;
  getEpics: () => void;
  createEpic: (name: string, description?: string) => void;
  createTask: (name: string, description?: string, deadline?: string) => void;
  deleteTask: (name: string) => void;
  toggleTask: (name: string, newStatus: boolean) => void;
}

export interface ActionsProviderProps {
  children: ReactNode;
}
