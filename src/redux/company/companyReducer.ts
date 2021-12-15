import LocalStorageManager from "../../utils/LocalStorageManager";
import { ADD_COMPANY, REMOVE_COMPANY, UPDATE_COMPANY } from "./type";
let myStorage = new LocalStorageManager("company");

export let companyReducer = (state = myStorage.getElements(), action: { payload: DataUser | Partial<DataUser>, type: string }) => {

    switch (action.type) {
        case ADD_COMPANY:
            return [...state, action.payload];

        case UPDATE_COMPANY:
            state = state.map((company: DataUser) => {
                return company.ID === action.payload.ID ? { ...company, ...action.payload } : company;
            })
            return [...state];

        case REMOVE_COMPANY:
            myStorage.removeDataFromStorage(action.payload as string);
            return state.filter((customer: DataUser) => customer.ID !== action.payload);
        default:
            return state;
    }

}
