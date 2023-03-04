import { Check, Circle, Trash } from "phosphor-react";
import { TaskContainer } from "./styles";

interface TaskProps {
  status?: 'completed' | 'scheduled';
}

export function Task({status = 'scheduled'}: TaskProps) {
  return (
    <TaskContainer status={status}>
      {status === 'scheduled' && <Circle size={20}/>}
      {status === 'completed' && <Check size={20}/>}      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quia deleniti! Perspiciatis et dolorum maiores omnis quidem rerum fuga quod cum pariatur?</p>
      <Trash size={24}/>
    </TaskContainer>
  )
}
