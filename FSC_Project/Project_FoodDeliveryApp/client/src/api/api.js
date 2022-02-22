import axios from 'axios';

const url = "http://localhost:8082";
const url2 = "http://localhost:8082/api";

export const subscribeAccount = (accountData) => axios.post(`${url}/subs`, accountData);
export const checkAccount = (accountData) => axios.post(`${url}/auth`, accountData);
export const createFood = (Food) => axios.post(`${url2}/food`, Food);