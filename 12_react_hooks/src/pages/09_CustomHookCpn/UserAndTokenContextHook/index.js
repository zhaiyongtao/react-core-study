import React from 'react';
import User from "./User";
import Profile from "./Profile";
export const UserConText = React.createContext();
export const TokenConText = React.createContext();
function UserAndTokenContextHook(props) {
    return (
        <div>
            <UserConText.Provider value = {{ name: "zyt", age: 18 }}>
                <TokenConText.Provider value="ABDADAAD">
                    <User />
                    <Profile />
                </TokenConText.Provider>
            </UserConText.Provider>
        </div>
    );
}

export default UserAndTokenContextHook;