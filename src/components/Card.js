import React from "react";

const Card = (props) => {
    return (
        <div className="github-profile">
            <img alt="GitHub user avatar" src={props.profile.avatar_url} />
            <div className="info">
                <div className="name">{props.profile.name}</div>
                <div className="company">{props.profile.company}</div>
            </div>
        </div>
    );
}

export default Card;