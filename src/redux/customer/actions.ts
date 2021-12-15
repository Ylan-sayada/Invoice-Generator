import { ADD_CUSTOMER, UPDATE_CUSTOMER, REMOVE_CUSTOMER } from "./type";

export let addCustomer = (data: DataUser) => {
    return {
        type: ADD_CUSTOMER,
        payload: data
    }
};
export let updateCustomer = (data: DataUser) => {
    return {
        type: UPDATE_CUSTOMER,
        payload: data
    }
};
export let removeCustomer = (ID: string) => {
    return {
        type: REMOVE_CUSTOMER,
        payload: ID
    }
};