import React from 'react'
import { withProps } from 'recompose'
import { differenceInMinutes } from 'date-fns'

const enhance = withProps(
  props => ({ formattedDate: differenceInMinutes(new Date(), new Date(props.added)) })
)

const Comment = ({ username, body, rating, formattedDate }) => (
  <div className='comment-item'>
    <div className='comment-header'>
      <a href='#'>
        <img alt='User-name'
          src='http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png'
          className='avatar-image size32' />
        {username}
      </a>
      <time className='comment-timestamp'> {formattedDate} min ago</time>
    </div>
    <div className='comment-body'>
      {body}
    </div>
    <div className='comment-actions'>
      <div className='comment-voting'>
        <button className='up'></button>
        <div className='score'>{rating}</div>
        <button className='down'></button>
      </div>
      <button className='btn btn-xs btn-reply'>reply</button>
    </div>
  </div>
)

export default enhance(Comment)
