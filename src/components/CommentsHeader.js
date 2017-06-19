import React from 'react'

const CommentsHeader = ({length, activeSort, sort}) => (
  <div className='comments-header'>
    <div className='pull-right'>
      <a onClick={() => sort('best')} href='#' className={activeSort === 'best' ? 'active' : 'text-muted'}>Best</a> |
      <a onClick={() => sort('newest')} href='#' className={activeSort === 'newest' ? 'active' : 'text-muted'}>Newest</a> |
      <a onClick={() => sort('oldest')} href='#' className={activeSort === 'oldest' ? 'active' : 'text-muted'}>Oldest</a>
    </div>
    <b>{length} Comments</b>
  </div>
)
export default CommentsHeader
