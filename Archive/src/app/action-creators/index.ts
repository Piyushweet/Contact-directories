import { ActionTypes } from "../action-types";
import { Contact } from "../actions";

const addContact = (contacts: Contact) => {
    return {
        type: ActionTypes.ADD_CONTACT,
        payload: contacts,
    };
};
const addContacts = (contacts: Contact[]) => {
    return {
        type: ActionTypes.ADD_CONTACTS,
        payload: contacts,
    };
};
export { addContacts, addContact };
