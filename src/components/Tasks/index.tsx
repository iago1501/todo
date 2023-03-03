import { Task } from "./components/Task";
import { Searchbar } from "./components/TaskForm";
import { TasksContainer, TasksListContainer, TasksNav } from "./styles";

export function Tasks() {
  return (
    <TasksContainer>
      <Searchbar />
      <TasksListContainer>
        <TasksNav>
          <a>Tarefas criadas <span>5</span></a>
          <a>Concluídas <span>2 de 5</span></a>
        </TasksNav>        
        <Task />
        <Task />
        <Task />
        <Task status='completed'/>
      </TasksListContainer>      
    </TasksContainer>
  )
}
