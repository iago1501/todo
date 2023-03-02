import styled from "styled-components";

export const TaskForm = styled.form`
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
  }

  button {
    width: 5.5rem;

    background-color: ${props => props.theme['--blue-800']};
    color: ${props => props.theme['--gray-100']};
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;  
  }
`
