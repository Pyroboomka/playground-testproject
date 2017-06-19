import React from 'react'
import ReactDOM from 'react-dom'
import CommentList from './containers/CommentList'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<CommentList />, document.getElementById('comments-container'))
registerServiceWorker()
