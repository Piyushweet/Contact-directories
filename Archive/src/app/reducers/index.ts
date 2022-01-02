import { ActionTypes } from "../action-types";
import { Action, Contact } from "../actions/index";

const initialState: Contact[] = [];
const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_CONTACT: {
            return [...state, action.payload];
        }
        case ActionTypes.ADD_CONTACTS: {
            return [...action.payload];
        }
        default: {
            return state;
        }
    }
};

export default reducer;
