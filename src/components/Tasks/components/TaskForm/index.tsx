import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { PlusCircle } from "phosphor-react";
import { TaskForm } from "./styles";
import { useTasks } from "../../../../contexts/TasksContext";

const taskSchema = zod.object({
  task: zod
    .string()
    .min(3, { message: "Conteúdo mínimo de 3 caracteres para uma tarefa" }),
});

type taskSchemaData = zod.infer<typeof taskSchema>;

export function Searchbar() {
  const { createNewTask } = useTasks();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<taskSchemaData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: "",
    },
  });

  function handleCreateNewTask(data: taskSchemaData) {
    createNewTask(data.task);
    reset();
  }

  return (
    <TaskForm onSubmit={handleSubmit(handleCreateNewTask)}>
      <input
        type="text"
        required
        placeholder="Adicione uma nova tarefa"
        title="Adicione uma nova tarefa"
        autoComplete="off"
        {...register("task")}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </TaskForm>
  );
}
