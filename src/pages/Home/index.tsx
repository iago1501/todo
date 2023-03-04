import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { TasksContextProvider } from "../../contexts/TasksContext";

export function Home() {
  return (
    <>
      <Header />
      <TasksContextProvider>
        <Tasks />
      </TasksContextProvider>      
    </>    
  )
}
