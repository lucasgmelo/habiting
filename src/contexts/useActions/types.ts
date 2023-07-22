import { ReactNode } from "react";

export interface TasksI {
  id: string;
  name: string;
  description?: string;
  status: boolean;
  dueDate?: string;
  epic: null | string;
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
  createTask: (name: string, description?: string, deadline?: string) => void;
  deleteTask: (name: string) => void;
  toggleTask: (name: string, newStatus: boolean) => void;
}

export interface ActionsProviderProps {
  children: ReactNode;
}
