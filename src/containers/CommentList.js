import React, { Component } from 'react'
import json from '../mock.js'
import { compareAsc, compareDesc } from 'date-fns'

import CommentForm from '../components/CommentForm'
import CommentsHeader from '../components/CommentsHeader'
import Comment from '../components/Comment'
import CommentWithChildren from '../components/CommentWithChildren'

class App extends Component {
  constructor () {
    super()
    this.state = {
      activeSort: '',
      total: 0,
      comments: []
    }
    this.submitNewComment = this.submitNewComment.bind(this)
  }

  componentWillMount () {
    const parseComments = ({ data }) => data
    /* I assume comments come parsed in parent/children format,
      as I defined them in mock.
      If not, I'll have to reparse them for react-way state
    */
    const fetchedComments = JSON.parse(json)
    const parsedComments = parseComments(fetchedComments)
    this.setState({
      total: fetchedComments.length,
      comments: parsedComments
    })
  }

  submitNewComment (comment) {
    const newComment = {
      id: this.state.total + 1,
      added: new Date(),
      username: 'MyNick',
      body: comment,
      rating: 0,
      parent: null,
      children: null
    }
    /*
    Mock post request...
    let url = 'thisIsMyPostNewCommentURL'
    let params = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newComment)
    }
    fetch(url, params)
    .then(res => res.json())
    .then(this.setState(downBelow))
     */
    this.setState({
      total: this.state.total + 1,
      comments: [newComment, ...this.state.comments]
    })
  }
  sortComments (type) {
    switch (type) {
      case 'best': {
        const newOrder = this.state.comments.sort((a, b) => b.rating > a.rating)
        this.setState({
          activeSort: 'best',
          comments: newOrder
        })
        break
      }
      case 'newest': {
        const newOrder = this.state.comments.sort((a, b) => compareAsc(new Date(b.added), new Date(a.added)))
        this.setState({
          activeSort: 'newest',
          comments: newOrder
        })
        break
      }
      case 'oldest': {
        const newOrder = this.state.comments.sort((a, b) => compareDesc(new Date(b.added), new Date(a.added)))
        this.setState({
          activeSort: 'oldest',
          comments: newOrder
        })
        break
      }
      default:
        break
    }
  }

  render () {
    return (
      <div id='comments'>
        <CommentForm onSubmit={this.submitNewComment} />
        <div className='comments-flow'>
          <CommentsHeader length={this.state.total}
            activeSort={this.state.activeSort}
            sort={this.sortComments.bind(this)}
          />
          {this.state.comments.map(item => {
            return item.children === null
            ? <Comment key={item.id} {...item} />
            : <CommentWithChildren key={item.id} parentComment={item} childrenComments={item.children} />
          })}
          <button className='btn btn-block'>More...</button>
        </div>
      </div>
    )
  }
}

export default App
