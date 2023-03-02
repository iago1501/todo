import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { PlusCircle } from 'phosphor-react';
import { TaskForm } from './styles';

const taskSchema = zod.object({
  task: zod.string().min(3, { message: 'Conteúdo mínimo de 3 caracteres para uma tarefa' }),
});

type taskSchemaData = zod.infer<typeof taskSchema>

export function Searchbar() {

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<taskSchemaData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: ''
    }
  })

  function handleFormSubmit(data: taskSchemaData) {
    console.log(data)
  }

  return (
    <TaskForm action="" onSubmit={handleSubmit(handleFormSubmit)}>
      <input type="text" 
      required
      placeholder='Adicione uma nova tarefa'
      autoComplete='off'
      {...register('task')}
    />
      <button type='submit'>
        Criar
        <PlusCircle size={16}/>
      </button>
    </TaskForm>
  )
}
