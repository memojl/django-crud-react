import axios from 'axios'
import { apiUrlTask } from './const';

const tasksApi = axios.create({
    baseURL: apiUrlTask
});

export const getAllTasks = ()=> tasksApi.get('/');
export const createTasks = (task)=> tasksApi.post('/',task);
export const editTasks = (task)=> tasksApi.put('/',task);
export const deleteTasks = (id)=> tasksApi.delete(`/${id}`);