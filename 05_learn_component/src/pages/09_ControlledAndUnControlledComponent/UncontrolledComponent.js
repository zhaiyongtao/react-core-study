import React, {Component} from 'react';

class UncontrolledComponent extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    用户:<input defaultValue="username" type="text" name="username" ref={this.inputRef}/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.inputRef.current.value);
    }
}

export default UncontrolledComponent;