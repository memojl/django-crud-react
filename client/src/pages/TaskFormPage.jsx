import React from 'react'
import {useForm} from 'react-hook-form'
import { createTasks } from '../api/tasks.api'
import {useNavigate} from 'react-router-dom'

export function TaskFormPage() {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = handleSubmit(async data => {
    const res = await createTasks(data);//console.log(res);
    if(res.status == 201){
      navigate('/tasks');
    }    
  })


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder='Title'
        {...register('title', {required: true})}
         /> 
         {errors.title && <span>Este campo es requerido</span>}
        <textarea 
        {...register('description', {required: true})}
        placeholder='Description' 
        cols="30" rows="10"></textarea>
        {errors.description && <span>Este campo es requerido</span>}
        <button>Save</button>
      </form>
    </div>
  )
}
