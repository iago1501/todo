import { render, screen, renderHook, waitFor, getByText, fireEvent } from '@testing-library/react';
import { Tasks } from '../../components/Tasks';
import { useTasks } from '../../contexts/TasksContext';

jest.mock("../../contexts/TasksContext")

enum TaskStatus {
  completed = "completed",
  scheduled = "scheduled",
}

const mockedTasks =  {
  tasks: [{
    "status": TaskStatus.scheduled,
    "text": "Mocked Task 1",
    "id": "1678069381481",
    "createdAt": "2023-03-06T02:24:54.900Z"
  },
  {
    "status": TaskStatus.completed,
    "text": "Mocked Task 2",
    "id": "1678069381471",
    "createdAt": "2023-03-06T02:25:54.900Z"
  }],
  createNewTask: jest.fn(),
  markTaskAsCompleted: jest.fn(),
  removeTask: jest.fn()
}

const mockedEmptyTasks =  {
  tasks: [],
  createNewTask: jest.fn(),
  markTaskAsCompleted: jest.fn(),
  removeTask: jest.fn()
}


// jest.mock("../../contexts/TasksContext", () => ({
//     useTasks() {
//       return {
//         tasks: [{
//               "status": "scheduled",
//               "text": "Mocked Task 1",
//               "id": "1678069381481",
//               "createdAt": "2023-03-06T02:24:54.900Z"
//             },
//             {
//               "status": "scheduled",
//               "text": "Mocked Task 2",
//               "id": "1678069381471",
//               "createdAt": "2023-03-06T02:25:54.900Z"
//             }],
//             createNewTask: jest.fn(),
//             markTaskAsCompleted: jest.fn(),
//             removeTask: jest.fn()
//       }
//     }
//   }
// ))

afterEach(() => {
  jest.clearAllMocks();
});

describe('Tasks Component', () => {
  // May be improved, mockedReturnValueOnce not working for this scenario
  const mockedUseTasks = jest.mocked(useTasks)

  it('It should display list of tasks', () => {
    
    // await waitFor ( () => renderHook(useTasks, {initialProps: mockedTasks}))

    mockedUseTasks.mockReturnValue(mockedTasks)

    render(<Tasks />)

    expect(screen.getByText("Mocked Task 1")).toBeInTheDocument()
    expect(screen.getByText("Mocked Task 2")).toBeInTheDocument()
  });

  it('It should display a message of not found tasks', () => {
    
    // await waitFor ( () => renderHook(useTasks, {initialProps: mockedTasks}))    

    mockedUseTasks.mockReturnValue(mockedEmptyTasks)    

    render(<Tasks />)

    expect(screen.getByText("Você ainda não tem tarefas cadastradas")).toBeInTheDocument()    
  });

  it('It should display list of completed tasks when clicking on concluídas', () => {
    
    // await waitFor ( () => renderHook(useTasks, {initialProps: mockedTasks}))

    mockedUseTasks.mockReturnValue(mockedTasks)

    render(<Tasks />)

    const anchor = screen.getByText("Concluídas")

    fireEvent.click(anchor)

    expect(screen.getByText("Mocked Task 2")).toBeInTheDocument()
    expect(screen.queryByText("Mocked Task 1")).not.toBeInTheDocument()
  });

})