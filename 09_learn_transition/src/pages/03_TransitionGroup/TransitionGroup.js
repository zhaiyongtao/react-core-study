import React, {PureComponent} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TransitionsGroup.css'
class TransitionGroups extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        }
    }

    render() {
        return (
            <div>
                <TransitionGroup>
                    {
                        this.state.friends.map((item, index) => {
                            return (
                                <CSSTransition classNames="friend" timeout={300} key={index}>
                                    <div>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={e => this.addFriend()}>+friend</button>
            </div>
        )
    }

    addFriend() {
        this.setState({
            friends: [...this.state.friends, "coderwhy"]
        })
    }
}


export default TransitionGroups;