import styled from "styled-components";

export const TaskMainForm = styled.form`
  display: flex;  
  flex-direction: row;  
  margin-top: -3rem;
  width: 100%;
  gap: 0.5rem;

  input {
    flex: 1;
    background-color: ${props => props.theme['--gray-500']};
    border: 1px solid ${props => props.theme['--gray-700']};
    color: ${props => props.theme['--gray-300']};
    height: 3.25rem;
    font-weight: 400;
    padding: 1rem;
    border-radius: 8px;
    transition: border-color 0.2s;

    &:focus, &:active, &:hover{
      border-color: ${props => props.theme['--purple-500']};
      color: ${props => props.theme['--gray-100']};
    }
  }

  button {
    width: 5.5rem;    
    border-radius: 8px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;

    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;

    transition: background-color 0.2s;
    background: ${props => props.theme['--blue-800']};
    color: ${props => props.theme['--gray-100']};

    &:hover{
      background: ${props => props.theme['--blue-500']};
    }
  }
`
