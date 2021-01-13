import React from 'react';

export const ThemeContext = React.createContext({color: 'black'});

function ProfileFooter (props) {
    console.log(props)
    return (
        <ThemeContext.Consumer>
            {
                value => (
                    <div>
                        <h2 style = {value}>Footer</h2>
                    </div>
                )
            }
        </ThemeContext.Consumer>

    )
}

ProfileFooter.contextType = ThemeContext;

export default ProfileFooter;