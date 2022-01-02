import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import ContactList from "./ContactList";
import db from "../firebase";

export default function Home() {
    const [contactName, setContactName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log("called");
        e.preventDefault();
        await addDoc(collection(db, "contacts"), {
            name: contactName,
            phone: phoneNumber,
        });
        setContactName("");
        setPhoneNumber(0);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Contact Name</label>
                    <input type="text" name="name" id="name" value={contactName} onChange={(e) => setContactName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Contact Number</label>
                    <input type="number" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(parseInt(e.target.value))} />
                </div>
                <button type="submit">Add Contact</button>
            </form>
            <ContactList />
        </>
    );
}
