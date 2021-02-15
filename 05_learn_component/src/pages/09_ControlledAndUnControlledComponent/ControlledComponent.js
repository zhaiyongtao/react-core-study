import React, {Component} from 'react';

class ControlledComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            sex: 'male',
            fruits: 'orange'
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)} >
                    用户名：<input type='text' id="username" name="username" onChange={(e) => this.handleChange(e)}
                               value={this.state.username}/> <br/>
                    密码：<input type="text" id="password" name="password" onChange={(e) => this.handleChange(e)}
                              value={this.state.password}/> <br/>
                    <label id="fruitsLabel" htmlFor="fruits">
                        水果：
                        <select id="fruits"
                                value={this.state.fruits}
                                onChange={e => this.handleFruitsChange(e)}>
                            <option value="apple">苹果</option>
                            <option value="orange">橘子</option>
                            <option value="banana">香蕉</option>
                        </select>
                    </label>
                    <br/>
                    <label htmlFor="male">
                        男
                    </label>
                    <input type="radio" name="sex" id="male" value='male' onChange={(e) => this.handleChange(e)}/>
                    <br/>
                    <label htmlFor="female">
                        女
                    </label>
                    <input type="radio" name="sex" id="female" value='female' onChange={(e) => this.handleChange(e)}/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

    handleChange = (e) => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFruitsChange = (e) => {
        console.log(e)
        let x = document.getElementById('fruitsLabel').htmlFor;
        console.log(x)
    }
    handleSubmit(event) {
        console.log(this.state.username, this.state.password, this.state.sex);
        event.preventDefault();
    }
}


export default ControlledComponent;