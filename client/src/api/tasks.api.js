import axios from 'axios'
import { apiUrlTask } from './const';

const tasksApi = axios.create({
    baseURL: apiUrlTask
});

//CRUD
//Create
export const createTasks = (task)=> tasksApi.post('/',task);
//Read
export const getAllTasks = ()=> tasksApi.get('/');
export const getTasks = (id)=> tasksApi.get(`/${id}/`);
//Update
export const updateTasks = (id,task)=> tasksApi.put(`/${id}/`,task);
//Delete
export const deleteTasks = (id)=> tasksApi.delete(`/${id}/`);
