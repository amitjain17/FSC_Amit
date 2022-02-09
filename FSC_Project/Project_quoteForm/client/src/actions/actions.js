import * as api from '../api';

export const checkValidation = (data) => async (data) => {

    try {
        const { data } = await api.validate(data);
        console.log(data);

    } catch (error) {
        console.log(error.message);
    }


}

export const getData = () => async (dispatch) => {
    try {
        const { data } = await api.fetchData();
        dispatch({ type: "FETCH_ALL", payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const createData = (data) => async (dispatch) => {
    try {
        const { rdata } = await api.createData(data);
        dispatch({ type: "CREATE", payload: rdata })
    } catch (error) {
        console.log(error);
    }
}

export const updateData = (id, data) => async (dispatch) => {
    try {
        const { rdata } = await api.updateData(id, data);
        dispatch({ type: "UPDATE", payload: rdata })
    } catch (error) {
        console.log(error);
    }
}