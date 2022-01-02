import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../app/action-creators";
import { Contact as IContact } from "../app/actions";
import db from "../firebase";
import Contact from "./Contact";

export default function ContactList() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const contacts: IContact[] | any = useSelector((state) => state);
    useEffect(() => {
        const unsub = onSnapshot(collection(db, "contacts"), (querySnapshot: any) => {
            const contacts: IContact[] = [];
            querySnapshot.forEach((doc: any) => {
                contacts.push(doc.data());
            });
            console.log(contacts);

            dispatch(addContacts(contacts));
        });
        return unsub;
    }, [dispatch]);
    console.log(state);

    return (
        <div>
            {contacts.map((args: any) => (
                <Contact {...args} />
            ))}
        </div>
    );
}
