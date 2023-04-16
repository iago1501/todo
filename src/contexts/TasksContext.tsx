import { createContext, ReactNode, Suspense, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useQuery } from "react-query";

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
  tasksQuantity: number;
}

interface TasksResponse {
  tasks: Task[],
  count: number
}

type Tasks = {
 tasksList: Task[],
 tasksQuantity: number,
}


export const TasksContext = createContext({} as TasksContextType);


export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksQuantity, setTasksQuantity] = useState(0);
  const today = new Date();

  const { data: tasksResponse } = useQuery<TasksResponse, Error>({
    queryKey: "todos",
    queryFn: () =>
      api.get("/tasks?_limit=5&_page=1").then((res) =>
        ({ tasks: res.data, count: res.headers["x-total-count"] })
      ),
    suspense: true,
  });

  useEffect(() => {
    if (tasksResponse) {
      setTasks(tasksResponse.tasks);
      setTasksQuantity(tasksResponse.count)
    }
  }, [tasksResponse])

  function createNewTask(taskText: string) {
    const newTask: Task = {
      id: String(today.getTime()),
      text: taskText,
      status: "scheduled",
      createdAt: today.toISOString(),
    };

    api.post("/tasks", newTask)

    setTasks((prevState) => [...prevState, newTask]);
  }

  function removeTask(taskID: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskID);

    api.delete(`/tasks/${taskID}`)

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

    // api.put(`/tasks/${taskID}`, )

    setTasks(updatedTasks);
  }

  return (
    <TasksContext.Provider
      value={{ tasks, tasksQuantity, createNewTask, changeTaskStatus, removeTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
