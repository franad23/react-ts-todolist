import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './form.css'

//Interfaces 
import { Task } from '../../interfaces/Task';

//Components
import Input from '../input/Input';
import TaskCard from '../task/TaskCard';

function Form() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleCreatedTask = (task: Task) => {
    setTaskList([...taskList, task]);
  }

  const handleCompletedTask = (id: string) => {
  const taskToUpdate = taskList.find(task => task.id === id);
  if (taskToUpdate) {
    taskToUpdate.isCompleted = true;
    const updatedTaskList = taskList.map(task =>
      task.id === id ? taskToUpdate : task
    );
    setTaskList(updatedTaskList);
    toast('Tarea Completada!',
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
  const handleDeleteTask = (id: string) => {
    const updatedTaskList = taskList.filter(task => task.id !== id);
    setTaskList(updatedTaskList);
    toast('Tarea Eliminada!',
      {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
  }
console.log(taskList);
  return (
    <div className='formMainContainer'>
      <div><Toaster /></div>
      <Input
        toHandleSaveTask ={handleCreatedTask}
      />
      <div className='tasksContainer'>
        {
          taskList.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              handleClickCompletedTask={handleCompletedTask}
              handleClickDeleteTask={handleDeleteTask}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Form