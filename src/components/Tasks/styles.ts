import styled from "styled-components";

export const TasksContainer = styled.div`  
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const TasksNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1.5rem;

  a {        

    font-weight: 700;
    font-size: 0.875rem;        

    span {     
      color: ${props => props.theme['--gray-200']};
      background: ${props => props.theme['--gray-400']};
      font-size: 0.75rem;

      padding: 0.125rem 0.5rem;
      border-radius: 999px;
    }
    &:first-child {
      color: ${props => props.theme['--blue-500']};
    }
    &:last-child {
      color: ${props => props.theme['--purple-500']};
    }
  }
`

export const TasksListContainer = styled.main`
  width: 100%;
  margin: 2.5rem auto;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`
