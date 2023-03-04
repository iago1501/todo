import Clipboard from '../../../../assets/Clipboard.svg';
import { NotFoundTasksContainer, NotFoundTextsContainer } from './styles';

export function NotFoundTasks() {
  return (
    <NotFoundTasksContainer>
      <img src={Clipboard} alt="" />
      <NotFoundTextsContainer>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </NotFoundTextsContainer>                    
    </NotFoundTasksContainer>
  )
}
