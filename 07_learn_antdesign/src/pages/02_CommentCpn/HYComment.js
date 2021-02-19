import React, {PureComponent} from 'react';
import HyCommentItem from './HYCommentItem'
import HYCommentInput from './HYCommentInput'

class HYComment extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            commentList: []
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.commentList.map((item, index) => {
                        return <HyCommentItem key={item.id} comment={item} index={index}
                                              removeItem={() => this.removeItem(index)}/>
                    })
                }
                <HYCommentInput submitComment={this.submitComment.bind(this)} />
            </div>
        );
    }

    removeItem = (index) => {
        const newCommentList = [...this.state.commentList];
        newCommentList.splice(index, 1);
        this.setState({
            commentList: newCommentList
        })
    }

    submitComment(comment) {
        this.setState({
            commentList: [...this.state.commentList, comment]
        })
    }
}


export default HYComment;