import { Check, Circle, Trash } from "phosphor-react";
import { useTasks } from "../../../../contexts/TasksContext";
import { TaskContainer } from "./styles";

interface TaskProps {
  status?: 'completed' | 'scheduled';
  text: string;
  id: string;
}

export function Task({id, status = 'scheduled', text}: TaskProps) {

  const {markTaskAsCompleted, removeTask} = useTasks()

  return (
    <TaskContainer status={status}>
      {status === 'scheduled' && <Circle size={20} onClick={ () => markTaskAsCompleted(id)}/>}
      {status === 'completed' && <Check size={20}/>}      
      <p>{text}</p>
      <Trash size={24} onClick={ () => removeTask(id)}/>
    </TaskContainer>
  )
}
