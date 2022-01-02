import { ActionTypes } from "../action-types";

export interface Contact {
    phoneNumber: number;
    name: string;
}

interface AddContactAction {
    type: ActionTypes.ADD_CONTACT;
    payload: Contact;
}
interface AddContactsAction {
    type: ActionTypes.ADD_CONTACTS;
    payload: Contact[];
}

export type Action = AddContactAction | AddContactsAction;
