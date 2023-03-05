import { createContext, ReactNode, useContext, useState } from "react";

enum TaskStatus {
  completed = 'completed',
  scheduled = 'scheduled'
}
interface Task {
  id: string;
  text: string;
  status: TaskStatus
  createdAt?: string;
  finishedAt?: string;
}

interface TasksContextType {
  tasks: Task[] | null;
  createNewTask: (text: string) => void;
  markTaskAsCompleted: (id: string) => void
}

export const TasksContext = createContext({} as TasksContextType);

interface TasksContextProviderProps {
  children: ReactNode;
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const today = new Date();

  function createNewTask(text: string) {
    const newTask: Task = {
      id: String(today.getTime()),
      text,
      status: TaskStatus.scheduled,
      createdAt: today.toISOString(),
    };

    setTasks((prevState) => [...prevState, newTask]);
  }

  function markTaskAsCompleted(taskID: string) {
    
    const updatedTasks = tasks.map((task) =>
      task.id === taskID
        ? {
            ...task,
            finishedAt: String(today.getTime()),
            status: TaskStatus.completed,
          }
        : {
            ...task,
          }
    );

    setTasks(updatedTasks)
  }

  return (
    <TasksContext.Provider value={{ tasks, createNewTask, markTaskAsCompleted }}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
