import * as api from '../api/api.js';

export const subscribe = (accountData) => async (dispatch) => {

    try {
        const { data } = await api.subscribeAccount(accountData);
        console.warn(data.response);

        dispatch({ type: "SIGNUP", payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const validation = (accountData) => async (dispatch) => {

    try {
        const { data } = await api.checkAccount(accountData);
        dispatch({ type: "STATUS", payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createFood = (Food) => async (dispatch) => {
    try {
        const { Food } = await api.createFood(Food);
        dispatch({ type: "CREATE_FOOD", payload: Food })
    }
    catch (error) {
        console.log(error);
    }
}