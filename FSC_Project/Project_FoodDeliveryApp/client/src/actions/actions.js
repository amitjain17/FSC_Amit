import * as api from '../api/api.js';

export const subscribe = (accountData) => async (dispatch) => {

    try {
        const { data } = await api.subscribeAccount(accountData);
        dispatch({ type: "STATUS", payload: data })
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