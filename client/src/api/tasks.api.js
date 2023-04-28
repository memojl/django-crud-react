import axios from 'axios'
import { apiGetTask } from './const';

export const getAllTasks = ()=>{
    return axios.get(apiGetTask);
}