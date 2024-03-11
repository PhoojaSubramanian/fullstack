// import axios from 'axios';
import instance from './axios';
const api_uri = "http://localhost:8181";

export const viewBookings =() => instance.get(`${api_uri}/api/v1/booking/bookinggetall`);
export const addBookings =(data) => instance.post(`${api_uri}/api/v1/booking/bookingadd`,data);
export const updateBookings =(id,data) => instance.put(`${api_uri}/api/v1/booking/bookingupdate?id=${id}`,data);
// export const deleteBookings =(data) => instance.delete(`${api_uri}/api/v1/user/userdelete?id=${data}`);