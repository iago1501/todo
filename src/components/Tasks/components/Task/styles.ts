import styled from 'styled-components';

export const TaskSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4.5rem;
  gap: 0.75rem;
  align-items: top;
    
  background: ${props => props.theme['--gray-500']};
  border: 1px solid ${props => props.theme['--gray-400']};
  color: ${props => props.theme['--gray-100']};
  border-radius: 8px;
  padding: 1rem;

  p {
    flex: 1;
    font-size: 0.875rem;
  }

  svg {
    cursor: pointer;
    border-radius: 4px;    
    transition: opacity 0.2s color 0.2s background-color 0.2s ;

    &:first-child{
      color: ${props => props.theme['--blue-500']};
      padding: 3px;
      
      &:hover{
        color: ${props => props.theme['--blue-800']};
        opacity: 0.8;
      }
    }

    &:last-child{
      color: ${props => props.theme['--gray-300']};
      padding: 5px;
      
      &:hover{
        color: ${props => props.theme['--danger']};
        background: ${props => props.theme['--gray-400']};
      }
    }
  }
`