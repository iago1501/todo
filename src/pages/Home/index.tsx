import { Suspense } from "react";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { TasksContextProvider } from "../../contexts/TasksContext";

export function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <TasksContextProvider> 
          <Tasks />
        </TasksContextProvider>     
      </Suspense> 
    </>    
  )
}
