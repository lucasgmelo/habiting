import { ReactNode } from "react";

export interface TasksI {
  id: string;
  name: string;
  description?: string;
  status: boolean;
  dueDate?: string;
  epic: null | string;
  userId: string;
}

export interface UserI {
  name: string;
  photo: string;
  tasks: TasksI[];
}

export interface ActionsContextData {
  details: {
    day: string;
    salutation: string;
    todayKey: string;
  };
  user: UserI;
  loadingTasks: boolean;
  loadingCreatingTask: boolean;
  getTasks: (userId: string) => void;
  createTask: (name: string, description?: string, deadline?: string) => void;
  deleteTask: (name: string) => void;
  toggleTask: (name: string, newStatus: boolean) => void;
}

export interface ActionsProviderProps {
  children: ReactNode;
}
