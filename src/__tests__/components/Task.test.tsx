import { Task } from "../../components/Tasks/components/Task";
import { render, screen } from '@testing-library/react';

describe('Task component', () => {
  it('it should render', () => {     
    render(<Task text="New Task" id="1" />)

    expect(screen.getByText("New Task")).toBeInTheDocument()
  });

  it('it should render a Circle svg when task is scheduled', () => {     
    render(<Task text="New Task" id="1" />)

    expect(screen.getByTitle('Circle')).toBeInTheDocument()
  });

  it('it should render a Check svg when task is completed', () => {     
    render(<Task text="New Task" id="1" status="completed" />)

    expect(screen.getByTitle('Check')).toBeInTheDocument()
  });  
})