import React, {useState} from 'react';
import CardList from './CardList.js';
import Form from './Form.js';
import '../styles/Form.css';

const Application = (props) => {
    const [gProfiles, setGProfiles] = useState([]);

    const appendGProfile = (newGProfile) => {
        setGProfiles([...gProfiles, newGProfile]);
    }

    return (
        <div>
            <div className="header">{props.title}</div>
            <Form onSubmit={appendGProfile} />
            <CardList profiles={gProfiles} />
        </div>
    );
}

export default Application;