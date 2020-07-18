import React from "react";
import Card from './Card.js';
import '../styles/Card.css';

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} profile={{...profile}} />)}
    </div>
);

export default CardList;