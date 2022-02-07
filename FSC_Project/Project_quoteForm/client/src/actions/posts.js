import * as api from '../api/index.js';

export const checkValidation = (data) => async (data) => {

    try {
        const { data } = await api.validate(data);
        console.log(data);

    } catch (error) {
        console.log(error.message);
    }


}