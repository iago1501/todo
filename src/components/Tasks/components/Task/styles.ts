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

  svg:first-child{
    color: ${props => props.theme['--blue-500']};
  }

  svg:last-child{
    color: ${props => props.theme['--gray-300']};
  }
`