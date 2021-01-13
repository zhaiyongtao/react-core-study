import React, {Component} from "react";
import ProfileHeader from './ProFileHeader'
import ProfileFooter from  './ProfileFooter'
class Profile extends Component {
    render() {
        return (
            <>
                <ProfileHeader />
                <ur>
                    <li>设置1</li>
                    <li>设置2</li>
                    <li>设置3</li>
                </ur>
                < ProfileFooter />
            </>
        )
    }
}

export default Profile;