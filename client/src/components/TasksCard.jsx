import React, {useEffect, useState} from 'react'
import { getAllTasks, deleteTasks } from '../api/tasks.api';
import {useNavigate} from 'react-router-dom'

export default function TasksCard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const {data} = await getAllTasks();
      console.log('Cargando', data);
      setTasks(data);  
    }
    loadTasks();
  }, []);
  
  return (<>
    {
        tasks && tasks.map(task =>(
          <div key={task.id}>
            <h2>{task.id} - {task.title}</h2>
            <div>
              <button onClick={()=>{navigate('/tasks/'+task.id)}}>Editar</button>
              <button onClick={async ()=>{
                const acept = window.confirm('Estas seguro de eliminar esta tarea?');
                if(acept){
                  await deleteTasks(task.id);
                  window.location.reload();
                }
              }}>Eliminar</button>
            </div>
            <p>{task.description}</p>
          </div>
        ))
      }
  </>)
}
