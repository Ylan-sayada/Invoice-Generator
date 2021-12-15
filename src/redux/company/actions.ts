import { ADD_COMPANY, UPDATE_COMPANY, REMOVE_COMPANY } from "./type";

export let addCompany = (data: DataUser) => {
    return {
        type: ADD_COMPANY,
        payload: data
    }
};
export let updateCompany = (data: DataUser) => {
    return {
        type: UPDATE_COMPANY,
        payload: data
    }
};
export let removeCompany = (ID: string) => {
    return {
        type: REMOVE_COMPANY,
        payload: ID
    }
};