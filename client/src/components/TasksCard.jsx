import React, {useEffect, useState} from 'react'
import { getAllTasks, getTasks, deleteTasks } from '../api/tasks.api';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast';

export default function TasksCard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const {data} = await getAllTasks();
    console.log('Cargando', data);
    setTasks(data);  
  }

  useEffect(() => {
    loadTasks();
  }, []);
  
  return (<>
    {
        tasks && tasks.map(task =>(
          <div key={task.id} className='bg-zinc-800 p-3'>
            <h2 className='font-bold uppercase'>{task.id} - {task.title}</h2>
            <p>{task.description}</p>
            <div className='grid grid-cols-2 gap-2 pt-4'>
              <button className='bg-indigo-500 px-3 py-2 rounded-lg' onClick={()=>{navigate('/tasks/'+task.id)}}>Editar</button>
              <button className='bg-indigo-500 px-3 py-2 rounded-lg' onClick={async ()=>{
                const acept = window.confirm('Estas seguro de eliminar esta tarea?');
                if(acept){
                  const res = await deleteTasks(task.id); //console.log(res);
                  if(res.status == 204){
                    loadTasks();//window.location.reload();
                    toast.success('Tarea Borrada');
                  }
                }
              }}>Eliminar</button>
            </div>
          </div>
        ))
      }
  </>)
}
