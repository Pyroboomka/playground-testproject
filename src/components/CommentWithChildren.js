import React from 'react'
import Comment from './Comment'

const CommentWithChildren = ({ parentComment, childrenComments }) => (
  <div className='comment-wrapper comment-wrapper-has-reply'>
    <Comment {...parentComment} />
    <div className='comment-reply'>
      {childrenComments.map(item => <Comment key={item.id} {...item} />)}
    </div>
  </div>
)

export default CommentWithChildren
