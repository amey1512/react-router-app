import React from 'react';
import {Link} from 'react-router-dom';

const PostItem = (props) => {
  console.log(props);
  return(
    <div>
      See all of your posts here.<br/>
      <Link to={{
        pathname:`${props.match.url}/1/amey1512`
      }}> Recent Post </Link><br/><br/>
      
      <Link to={{
        pathname:`${props.match.url}/2/amey1512`
      }}> Create Post </Link><br/><br/>
      
      <Link to={{
        pathname:`${props.match.url}/3/amey1512`
      }}> Older Post </Link><br/><br/>
      
      <Link to="/"> Back to Home</Link>
      <hr/>
    </div>
  )
}

export default PostItem;