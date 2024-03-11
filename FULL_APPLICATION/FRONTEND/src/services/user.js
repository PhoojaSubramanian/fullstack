import axios from 'axios';
import instance from './axios';
const api_uri = "http://localhost:8181";

export const viewUser =() => instance.get(`${api_uri}/api/v1/user/getall`);
export const addUser =(data) => axios.post(`${api_uri}/api/v1/auth/register`,data);
export const updateUser =(data) => instance.put(`${api_uri}/api/v1/user/userupdate`,data);
export const deleteUser =(data) => instance.delete(`${api_uri}/api/v1/user/userdelete?id=${data}`);
export const getUser =(email) => instance.get(`${api_uri}/api/v1/user/get?email=${email}`);