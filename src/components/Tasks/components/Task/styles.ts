import styled, { css } from "styled-components";

interface TaskContainerProps {
  status: "completed" | "scheduled";
}

export const TaskContainer = styled.div<TaskContainerProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4.5rem;
  gap: 0.75rem;
  align-items: top;

  background: ${(props) => props.theme["--gray-500"]};
  border: 1px solid ${(props) => props.theme["--gray-400"]};
  color: ${(props) => props.theme["--gray-100"]};

  border-radius: 8px;
  padding: 1rem;

  ${(props) =>
    props.status === "completed" &&
    css`
      text-decoration-line: line-through;
      color: ${(props) => props.theme["--gray-300"]};
    `};

  p {
    flex: 1;
    font-size: 0.875rem;
  }

  svg {
    cursor: pointer;
    border-radius: 4px;
    transition: opacity 0.2s color 0.2s background-color 0.2s;

    &:first-child {                      
      ${(props) =>
        props.status === "scheduled" &&
        css`
          color: ${(props) => props.theme["--blue-500"]};

          &:hover {
            color: ${(props) => props.theme["--blue-800"]};
            opacity: 0.8;
          }
        `};

      ${(props) =>
        props.status === "completed" &&
        css`
          color: ${(props) => props.theme["--gray-100"]};
          background: ${(props) => props.theme["--purple-800"]};
          border-radius: 999px;         
          padding: 3px;

          &:hover {
            background: ${(props) => props.theme["--purple-500"]};            
          }
        `};
    }

    &:last-child {
      color: ${(props) => props.theme["--gray-300"]};
      padding: 5px;

      &:hover {
        color: ${(props) => props.theme["--danger"]};
        background: ${(props) => props.theme["--gray-400"]};
      }
    }
  }
`;
