import { createContext, ReactNode, useContext, useState } from "react";

type TaskStatus = 'completed' | 'scheduled'
export interface Task {
  id: string;
  text: string;
  status: TaskStatus;
  createdAt?: string;
  finishedAt?: string;
}

interface TasksContextProviderProps {
  children: ReactNode;
}

type changeTaskStatusProps = {
  taskID: string;
  status: TaskStatus;
}

interface TasksContextType {
  tasks: Task[];
  createNewTask: (text: string) => void;
  changeTaskStatus: ({taskID, status}: changeTaskStatusProps) => void;
  removeTask: (id: string) => void;
}

export const TasksContext = createContext({} as TasksContextType);


export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const today = new Date();

  function createNewTask(taskText: string) {
    const newTask: Task = {
      id: String(today.getTime()),
      text: taskText,
      status: "scheduled",
      createdAt: today.toISOString(),
    };

    setTasks((prevState) => [...prevState, newTask]);
  }

  function removeTask(taskID: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskID);

    setTasks(updatedTasks);
  }

  function changeTaskStatus({taskID, status}: changeTaskStatusProps) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskID
        ? {
            ...task,
            finishedAt: String(today.getTime()),
            status: status,
          }
        : {
            ...task,
          }
    );

    setTasks(updatedTasks);
  }

  return (
    <TasksContext.Provider
      value={{ tasks, createNewTask, changeTaskStatus, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
