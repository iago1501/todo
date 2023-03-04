import styled from 'styled-components';

export const NotFoundTasksContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  width: 100%;
  border-top: 1px solid ${props => props.theme['--gray-400']};
  border-radius: 8px;
  gap: 1.5rem;

`

export const NotFoundTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme['--gray-300']};
  line-height: 140%;
`