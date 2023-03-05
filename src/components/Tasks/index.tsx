import { useTasks } from "../../contexts/TasksContext";
import { NotFoundTasks } from "./components/NotFoundTasks";
import { Task } from "./components/Task";
import { Searchbar } from "./components/TaskForm";
import {
  TasksContainer,
  TasksListContainer,
  TasksMainContainer,
  TasksNav,
} from "./styles";

export function Tasks() {
  const { tasks } = useTasks();

  const createdTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;

  return (
    <TasksContainer>
      <Searchbar />
      <TasksMainContainer>
        <TasksNav>
          <a>
            Tarefas criadas <span>{createdTasks}</span>
          </a>
          <a>
            Concluídas <span>{completedTasks} de {createdTasks}</span>
          </a>
        </TasksNav>
        {tasks.length > 0 ? (
          <TasksListContainer>
            {tasks.map((task) => (
              <Task status={task.status} />
            ))}
          </TasksListContainer>
        ) : (
          <NotFoundTasks />
        )}
      </TasksMainContainer>
    </TasksContainer>
  );
}
