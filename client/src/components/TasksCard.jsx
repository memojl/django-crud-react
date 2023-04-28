import React, {useEffect, useState} from 'react'
import { getAllTasks } from '../api/tasks.api';

export default function TasksCard() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      async function loadTasks(){
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
            <p>{task.description}</p>
          </div>
        ))
      }
  </>)
}
