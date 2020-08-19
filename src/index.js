import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Home from './components/home';
import Profile from './components/profile';
import Post from './components/post';
import PostItem from './components/post_item';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home Page</Link> <br/><br/>
          <Link to="/profile">My Profile </Link> <br/><br/>
          <hr/>
        </header>
        <Switch>
          <Route path="/profile/posts/:id/:username" component={Post}/>
          <Route path="/profile/posts" component={PostItem}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));