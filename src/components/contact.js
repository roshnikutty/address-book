import React from 'react';
import './contact.css';

export default function Contact(props) {
    return (<div>
        <span><img src = {props.photo}/></span> <span><h3>{props.name}</h3></span>  <span><h4>{props.address}</h4></span>
    </div>);
}

Contact.defaultProps = {
    name: "",
    photo: "",
    address: ""
};