import { createContext, ReactNode, useContext, useState } from "react";


interface Task {
  text: string;
  status: 'completed' | 'scheduled'
}

interface TasksContextType {
  tasks: Task[] | null
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksContextProviderProps {
  children: ReactNode;
}

export function TasksContextProvider({children}: TasksContextProviderProps){

  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <TasksContext.Provider value={{tasks}}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => useContext(TasksContext)