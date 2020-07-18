import React, {useState} from 'react';
import axios from 'axios';


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

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} profile={{...profile}} />)}
    </div>
);

const Card = (props) => {
    return (
        <div className="github-profile">
            <img src={props.profile.avatar_url} />
            <div className="info">
                <div className="name">{props.profile.name}</div>
                <div className="company">{props.profile.company}</div>
            </div>
        </div>
    );
}

const Form = (props) => {

    const [userName, setUserName] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${userName}`);
        props.onSubmit(response.data);
        setUserName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                required
                type="text"
                placeholder="GitHub username"
                value={userName}
                onChange={event => setUserName(event.target.value)} />
            <button>Add card</button>
        </form>
    );
};

export default Application;