import axios from 'axios';

const url = "http://localhost:8082";

export const subscribeAccount = (accountData) => axios.post(`${url}/subs`, accountData);
export const checkAccount = (accountData) => axios.post(`${url}/auth`, accountData);