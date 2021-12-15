import { createStore,applyMiddleware,compose,combineReducers } from "redux";
import { companyReducer } from "./company/companyReducer";
import {  customerReducer } from "./customer/customerReducer";
const composeEnhancers= (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({customers:customerReducer,company:companyReducer}),composeEnhancers(applyMiddleware()));

export default store;