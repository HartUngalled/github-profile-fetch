import React, {useState} from 'react';
import axios from 'axios';

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

export default Form;