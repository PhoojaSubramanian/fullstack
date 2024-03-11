// import axios from 'axios';
import instance from './axios';
const api_uri = "http://localhost:8181";

export const viewService =() => instance.get(`${api_uri}/api/v1/service/servicegetall`);
export const addService =(data) => instance.post(`${api_uri}/api/v1/service/serviceadd`,data);
export const updateService =(id,data) => instance.put(`${api_uri}/api/v1/service/serviceupdate?id=${id}`,data);
export const deleteService =(data) => instance.delete(`${api_uri}/api/v1/service/servicedelete?id=${data}`);