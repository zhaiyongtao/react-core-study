import React, {PureComponent} from 'react';
import {Input, Button} from 'antd';
import moment from 'moment'

const {TextArea} = Input;


class HyCommentInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = () =>{
        console.log(1)
        const commentInfo = {
            id: Date.now(),
            name: "zyt",
            avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: <p>{this.state.value}</p>,
            datetime: moment()
        }

        this.props.submitComment(commentInfo);
        this.setState({
            value: ''
        })
    }


    render() {
        return (
            <>
                <TextArea
                    placeholder="请输入评论"
                    rows={4}
                    showCount
                    allowClear
                    value={this.state.value}
                    onChange={(e) => this.onChange(e)}/>
                    <Button type="primary" onClick={() => this.onSubmit()}>添加评论</Button>
            </>
        );
    }



}


export default HyCommentInput;