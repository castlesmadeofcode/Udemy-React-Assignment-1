import React from 'react';


const UserOutput = (props) => {

    return (
        <div>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
            <p>{props.username}</p>
        </div>

    );
};

export default UserOutput;
