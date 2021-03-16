import React from 'react';
import {UserConText,TokenConText} from "./index";

function User(props) {
    const user = React.useContext(UserConText)
    const token = React.useContext(TokenConText)
    console.log(user)
    return (
        <div>
            <h2>User</h2>
            <div>
                {Object.keys(user).map(key=> (<div>{user[key]}</div>))}
                {token}
            </div>
        </div>
    );
}

export default User;