import React, {Component} from 'react';

class LifeCycle extends Component {
  state = {
    title: 'Life Cycle Component'
  }
  // componentWillMount(){
  //   console.log('Before Render');
  // }
  // componentDidMount(){
  //   console.log('After Render');
  // }
  componentWillUpdate(){
    console.log('Inside Will Update');
  }
  componentDidUpdate(){
    console.log('Inside Did update');
    return true;
  }
  shouldComponentUpdate(){
    console.log("Should Component Update");
    return false;
  }
  render(){
    console.log('Inside Render');
    return(
      <div
        onClick = {()=> {
          this.setState({
            title:'Title changed'
          })
        }}
      >{this.state.title}</div>
    )
  }
}

export default LifeCycle;