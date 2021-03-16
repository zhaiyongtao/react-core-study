import React from 'react';
import useUserTokenHook from "../hooks/UseUserTokenHook";

function Profile(props) {
    const [user,token] = useUserTokenHook()
    return (
        <div>
            <h2>
                Profile
            </h2>
            <div>
                {Object.keys(user).map(key=> (<div>{user[key]}</div>))}
                {token}
            </div>
        </div>
    );
}

export default Profile;