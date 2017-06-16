import React from 'react';
import './contact.css';

export default function Contact(props) {
    return (<div>
        <span>{props.name}</span> <span>{props.photo}</span> <span>{props.address}</span>
    </div>);
}

Contact.defaultProps = {
    name: "",
    photo: "",
    address: ""
};