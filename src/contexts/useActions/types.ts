import { ReactNode } from "react";

export interface GoalI {
  name: string;
  description?: string;
  deadline: Date;
  current: number;
  total: number;
}

export interface TasksI {
  name: string;
  description?: string;
  status: boolean;
  deadline?: Date;
  dateDone: null | Date;
}

export interface HabitI {
  name: string;
  description?: string;
  dayAssigned: string;
  timesADay: number;
}

export interface TrackI {
  goals: {
    name: string;
    currentToday: number;
    current: number;
    total: number;
    totalToday: number;
  }[];
  habits: {
    name: string;
    current: number;
    total: number;
  }[];
}

export interface GeneralActionI {
  title: string;
  progress: number;
  total: number;
  progressPercent: number;
  text: string;
}
export interface UserI {
  name: string;
  photo: string;
  startDate: Date;
  endDate: Date;
  goals: GoalI[];
  habits: HabitI[];
  tasks: TasksI[];
}

export interface ActionsContextData {
  details: {
    day: string;
    salutation: string;
    todayKey: string;
  };
  user: UserI;
  tracker: Map<string, TrackI>;
}

export interface ActionsProviderProps {
  children: ReactNode;
}
