import React from "react";

function UserCard(props) {
  return (
    <div className="user-styling">
      <h1>Login: {props.dataSet.login}</h1>
      <h2>Name: {props.dataSet.name}</h2>
      {console.log(props.dataSet)}
    </div>
  );
}

export default UserCard;
