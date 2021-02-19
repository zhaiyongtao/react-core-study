import React, {createElement, PureComponent} from 'react';
import {Comment, Avatar, Tooltip} from 'antd'
import {DeleteOutlined} from '@ant-design/icons';

class HyCommentItem extends PureComponent {

    actions = [
        <Tooltip key="comment-basic-delete" title="delete">
        <span onClick={() => this.props.removeItem()}>
        {/*{createElement(DeleteOutlined)}*/}
        <DeleteOutlined />
            <span className="comment-actio
            n">删除</span>
      </span>
        </Tooltip>,
    ]

    render() {
        const {comment} = this.props;

        return (
            <Comment
                actions={this.actions}
                author={<a href="/#">{comment.name}</a>}
                avatar={
                    <Avatar
                        src={comment.avatar}
                        alt={comment.name}
                    />
                }
                content={
                    comment.content
                }
                datetime={
                    <Tooltip title={comment.datetime.format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{comment.datetime.fromNow()}</span>
                    </Tooltip>
                }
            />
        );
    }

}


export default HyCommentItem;