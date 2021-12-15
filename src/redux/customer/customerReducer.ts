import LocalStorageManager from "../../utils/LocalStorageManager";
import { ADD_CUSTOMER, UPDATE_CUSTOMER, REMOVE_CUSTOMER } from "./type";

let myStorage = new LocalStorageManager("customer");


export let customerReducer = (state = myStorage.getElements(), action: { payload: DataUser | Partial<DataUser>, type: string }) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return [...state, action.payload];

        case UPDATE_CUSTOMER:
            state = state.map((customer: DataUser) => {
                return customer.ID === action.payload.ID ? { ...customer, ...action.payload } : customer;
            })
            return [...state];

        case REMOVE_CUSTOMER:
            myStorage.removeDataFromStorage(action.payload as string);
            return state.filter((company: DataUser) => company.ID !== (action.payload));
        default:
            return state
    }
}
