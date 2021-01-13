import React, {Component} from 'react';
import Profile from "./Profile";
import {UserContext} from './ProFileHeader'
import {ThemeContext} from './ProfileFooter'

class ReactContext extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={{ nickname: "why", level: 99 }}>
                    <ThemeContext.Provider value = {{color: 'red'}}>
                        <Profile />
                    </ThemeContext.Provider>
                </UserContext.Provider>

            </div>
        );
    }
}

export default ReactContext;