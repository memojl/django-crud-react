import axios from 'axios'
import { apiUrlTask } from './const';

const tasksApi = axios.create({
    baseURL: apiUrlTask
});

export const getAllTasks = ()=> tasksApi.get('/');
export const getTasks = (id)=> tasksApi.get(`/${id}/`);
export const createTasks = (task)=> tasksApi.post('/',task);
export const deleteTasks = (id)=> tasksApi.delete(`/${id}/`);
export const updateTasks = (id,task)=> tasksApi.put(`/${id}/`,task);