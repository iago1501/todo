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
`;
export const TasksNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;

  a {
    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;

    transition: opacity 0.2s;

    &:first-child {
      color: ${(props) => props.theme["--blue-500"]};
    }
    &:last-child {
      color: ${(props) => props.theme["--purple-500"]};
    }
    &:hover {
      opacity: 0.8;
    }

    span {
      color: ${(props) => props.theme["--gray-200"]};
      background: ${(props) => props.theme["--gray-400"]};
      font-size: 0.75rem;

      padding: 0.125rem 0.5rem;
      border-radius: 999px;
    }
  }
`;

export const TasksMainContainer = styled.main`
  width: 100%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TasksListContainer = styled.section`
  display: flex;
  flex-direction: column;    
  gap: 0.75rem;
  width: 100%;
`