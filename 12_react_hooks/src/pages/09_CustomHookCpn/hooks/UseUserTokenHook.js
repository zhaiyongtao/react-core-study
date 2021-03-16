import React from 'react';
import {TokenConText, UserConText} from "../UserAndTokenContextHook";

function useUserTokenHook(props) {
   const user = React.useContext(UserConText)
    const token = React.useContext(TokenConText)
    return [user, token]
}

export default useUserTokenHook;