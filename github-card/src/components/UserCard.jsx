import React from 'react';

function UserCard ({ dataSet }) {

    return (
        <h1>Login: {dataSet.login}</h1>
        <h2>Name: {dataSet.name}</h2>
    )

}

export default UserCard;