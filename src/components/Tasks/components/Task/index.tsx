import { Check, Circle, Trash } from "phosphor-react";
import { useTasks } from "../../../../contexts/TasksContext";
import { TaskContainer } from "./styles";

interface TaskProps {
  status?: 'completed' | 'scheduled';
  text: string;
  id: string;
}

export function Task({id, status = 'scheduled', text}: TaskProps) {

  const {changeTaskStatus, removeTask} = useTasks()

  return (
    <TaskContainer status={status}>
      {status === 'scheduled' && <Circle alt="Circle" size={20} onClick={ () => changeTaskStatus({taskID: id, status: "completed"})}/>}
      {status === 'completed' && <Check alt="Check" size={20} onClick={ () => changeTaskStatus({taskID: id, status: "scheduled"})}/>}      
      <p>{text}</p>
      <Trash size={24} onClick={ () => removeTask(id)}/>
    </TaskContainer>
  )
}
