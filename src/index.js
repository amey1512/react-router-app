import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Profile from './components/profile';
import Post from './components/post';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Route exact path="/"   component={Home}/>
        <Route path="/profile"  component={Profile}/>
        <Route path="/posts"    component={Post}/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));