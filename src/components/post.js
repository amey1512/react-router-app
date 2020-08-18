import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
  return(
    <div>
      <h1> Welcome to Posts {props.match.params.username} </h1><br/>
      <h3> It is your {props.match.params.id} post</h3>
      <Link to="/"> Back to Home</Link>
      <hr/>
    </div>
  )
}

export default Post;