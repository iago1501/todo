enum TaskStatus {
  completed = "completed",
  scheduled = "scheduled",
}

export const mockedScheduledTask = [
  {
  status: TaskStatus.scheduled,
  text: "Scheduled Task 1",
  id: "1678069381481"  
  },
  {
    status: TaskStatus.scheduled,
    text: "Scheduled Task 2",
    id: "1678069381482"  
  }
]

export const mockedCompletedTask =  [
  {
  status: TaskStatus.completed,
  text: "Completed Task 1",
  id: "2678069381481"  
  },
  {
    status: TaskStatus.completed,
    text: "Completed Task 2",
    id: "2678069381482"  
  }
]