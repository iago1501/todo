import { Circle, Trash } from "phosphor-react";
import { TaskSection } from "./styles";

export default function Task() {
  return (
    <TaskSection>
      <Circle size={24}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quia deleniti! Perspiciatis et dolorum maiores omnis quidem rerum fuga quod cum pariatur?</p>
      <Trash size={24}/>
    </TaskSection>
  )
}
