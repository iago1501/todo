import { useEffect, useState } from "react";
import { Task as TaskProps, useTasks } from "../../contexts/TasksContext";
import { NotFoundTasks } from "./components/NotFoundTasks";
import { Task } from "./components/Task";
import { TaskForm } from "./components/TaskForm";
import {
  TasksContainer,
  TasksListContainer,
  TasksMainContainer,
  TasksNav,
} from "./styles";

enum TaskTypeToDisplay {
  scheduled = 'scheduled',
  completed = 'completed'
}


export function Tasks() {  
  const { tasks, tasksQuantity } = useTasks();
  const [tasksToDisplay, setTasksToDisplay] = useState<TaskProps[]>(tasks)
  const [typeToDisplay, setTypeToDisplay] = useState<TaskTypeToDisplay>(TaskTypeToDisplay.scheduled)

  const createdTasksQuantity = tasksQuantity;
  const completedTasks = tasks?.filter(task => task.status === 'completed');
  const completedTasksQuantity = completedTasks?.length

  function handleChangeDisplayedTasks(){
    if(typeToDisplay === 'scheduled'){
      return setTasksToDisplay(tasks)
    }
    return setTasksToDisplay(completedTasks)
  }

  function handleChangeTaskTypeToDisplay(type: TaskTypeToDisplay){
    setTypeToDisplay(type)
  }

  useEffect( () => {
    handleChangeDisplayedTasks()
  }, [tasks, typeToDisplay])


  return (
    <TasksContainer>
      <TaskForm />
      <TasksMainContainer>
        <TasksNav>
          <a onClick={() => handleChangeTaskTypeToDisplay(TaskTypeToDisplay.scheduled)}>
            Tarefas criadas <span>{createdTasksQuantity}</span>
          </a>
          <a onClick={() => handleChangeTaskTypeToDisplay(TaskTypeToDisplay.completed)}>
            Concluídas <span>{completedTasksQuantity} de {createdTasksQuantity}</span>
          </a>
        </TasksNav>
          {tasksToDisplay?.length > 0 ? (
            <TasksListContainer>
              {tasksToDisplay?.map((task) => (
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
