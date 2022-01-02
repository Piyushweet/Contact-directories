import React from "react";

export default function Contact(props: any) {
    return (
        <>
            <div>Name: {props.name}</div>
            <div>Phone Number: {props.phone}</div>
        </>
    );
}
