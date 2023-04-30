import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import { createTasks, getTasks, updateTasks } from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TaskFormPage() {
  const navigate = useNavigate();
  const {id} = useParams(); //console.log(id);
  const {register, handleSubmit, formState: {errors}, setValue} = useForm();


  const onSubmit = handleSubmit(async data => {
    const res = (id) ? await updateTasks(id,data) : await createTasks(data);
    console.log(res);
    if(res.status == 200 || res.status == 201){
      navigate('/tasks');
      if(res.status == 201){toast.success('Tarea Creada')}
      if(res.status == 200){toast.success('Tarea Actualiza')}
    }    
  })

  const loadTask = async (id) => {
    const {data} = await getTasks(id);//console.log('Cargando', data);
    setValue('title', data.title);
    setValue('description', data.description);
  }

   useEffect(() => {
    if(id){
      loadTask(id);
    }
  }, [id])
  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder='Title'
        {...register('title', {required: true})}
         /> 
         {errors.title && <span>Este campo es requerido</span>}
        <textarea 
        placeholder='Description' 
        {...register('description', {required: true})}
        cols="30" rows="10"></textarea>
        {errors.description && <span>Este campo es requerido</span>}
        <button>Save</button>
      </form>
    </div>
  )
}
