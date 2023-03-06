import { useState } from "react";
import { Task as TaskProps, useTasks } from "../../contexts/TasksContext";
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
  const [tasksToDisplay, setTasksToDisplay] = useState<TaskProps[]>(tasks)

  const createdTasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed');
  const completedTasksQuantity = completedTasks.length

  function handleChangeDisplayedTasks(typeToDisplay: 'scheduled' | 'completed'){
    if(typeToDisplay === 'scheduled'){
      return setTasksToDisplay(tasks)
    }
    return setTasksToDisplay(completedTasks)
  }


  return (
    <TasksContainer>
      <Searchbar />
      <TasksMainContainer>
        <TasksNav>
          <a onClick={() => handleChangeDisplayedTasks('scheduled')}>
            Tarefas criadas <span>{createdTasksQuantity}</span>
          </a>
          <a onClick={() => handleChangeDisplayedTasks('completed')}>
            Concluídas <span>{completedTasksQuantity} de {createdTasksQuantity}</span>
          </a>
        </TasksNav>
        {tasksToDisplay.length > 0 ? (
          <TasksListContainer>
            {tasksToDisplay.map((task) => (
              <Task key={task.id} {...task}/>
            ))}
          </TasksListContainer>
        ) : (
          <NotFoundTasks />
        )}
      </TasksMainContainer>
    </TasksContainer>
  );
}
