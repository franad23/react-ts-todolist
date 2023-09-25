import './taskcard.css';
import { AiOutlineCheck } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

//Interfaces
import { Task } from '../../interfaces/Task';
//Props

interface TaskProps {
  task: Task;
  handleClickCompletedTask: (id: string) => void;
  handleClickDeleteTask: (id: string) => void;
}

function TaskCard({ task, handleClickCompletedTask, handleClickDeleteTask }: TaskProps) {

  return (
    <div className='taskMainContainer'>
      {
        task ? 
        <div className='taskContainer'>
          <p className={task.isCompleted ? "taskTitle taskCompleted" : "taskTitle"}>{task.task}</p>
          <div className='iconsContainer'>
            <AiOutlineCheck onClick={() => handleClickCompletedTask(task.id)} />
            <BsTrash onClick={() => handleClickDeleteTask(task.id)} />
          </div>
        </div>
          :
        <h1>no hay tareas</h1>
      }
    </div>

  )
}

export default TaskCard