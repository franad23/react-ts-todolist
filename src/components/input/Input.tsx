import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './input.css'

//Interfaces
import { Task } from '../../interfaces/Task';
//Props
interface Props {
  toHandleSaveTask: (task: Task) => void;
}

function Input({ toHandleSaveTask }: Props) {
  const [Task, setTask] = useState<Task>({
    id: uuidv4(),
    task: '',
    isCompleted: false,
  });

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...Task,
      [target.name]: target.value.trim(),
    })
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Task.task.length === 0) {
      toast('Tarea vacia!',
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    } else {
      toHandleSaveTask(Task);
      setTask({
        id: uuidv4(),
        task: '',
        isCompleted: false,
      })
      toast('Tarea Creada!',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div><Toaster /></div>
      <input type="text" className='input' name='task' onChange={handleInputChange} value={Task.task} />
      <button className='btnSave'>Guardar</button>
    </form>
  )
}

export default Input