import { NotFoundTasks } from "./components/NotFoundTasks";
import { Task } from "./components/Task";
import { Searchbar } from "./components/TaskForm";
import { TasksContainer, TasksListContainer, TasksMainContainer, TasksNav } from "./styles";

export function Tasks() {
  return (
    <TasksContainer>
      <Searchbar />
      <TasksMainContainer>
        <TasksNav>
          <a>Tarefas criadas <span>5</span></a>
          <a>Concluídas <span>2 de 5</span></a>
        </TasksNav>
        <NotFoundTasks/>        
        {/* <TasksListContainer>
          <Task />
          <Task />
          <Task />
          <Task status='completed'/>
        </TasksListContainer> */}
      </TasksMainContainer>      
    </TasksContainer>
  )
}
