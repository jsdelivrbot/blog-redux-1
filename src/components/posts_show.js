import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  render() {
    return (
      <div>
       Show Post
      </div>
    )
  }
}


export default connect(null, { fetchPost })(PostsShow);