import React from 'react'
import { withState, withHandlers, compose } from 'recompose'

const enhance = compose(
  withState('newComment', 'updateComment', ''),
  withHandlers({
    onChange: props => e => props.updateComment(e.target.value),
    onSubmit: (props) => (e) => {
      e.preventDefault()
      props.onSubmit(props.newComment)
      props.updateComment('')
    }
  })
)

const CommentForm = ({ newComment, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className='comment-entry'>
      <div className='comment-entry-header'>
        <img alt='MyNick' src='http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png'
          className='avatar-image size32' /> MyNick
      </div>
      <div className='form-group'>
        <textarea className='form-control'
          name='text'
          placeholder='Put your shit here...'
          value={newComment}
          onChange={onChange} ></textarea>
      </div>
      <div className='comment-entry-footer'>
        <button type='submit' className='btn btn-default btn-sm btn-block'>Submit</button>
      </div>
    </div>
  </form>
)
export default enhance(CommentForm)
