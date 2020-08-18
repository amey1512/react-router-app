import React from 'react';
import {Link} from 'react-router-dom';

const Profile = (props) => {
  return(
    <div>
      Hey we are inside Profile component.<br/>
      <Link to={{
        pathname:`${props.match.url}/posts`
      }}> Click to see your post </Link>
      <br/>
      <Link to="/"> Back to Home</Link>
      <hr/>
    </div>
  )
}

export default Profile;