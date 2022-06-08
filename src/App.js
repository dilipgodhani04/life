import React, { Component } from 'react';
import Student from './Student';



export default class App extends Component {
    
        state = {
            name: "dilip"
        };
    
  render() {
    return (
      <div>
          <Student name={this.state.name} />
      </div>
    );
  }
}















//  class App extends Component {
//    constructor(){
//     super();
//     console.log('constructor');
//    }

//    static getDerivedStateFromProps(props,state){
//      console.log('getDerivedStateFromProps');
//      return{};
//    }
//    shouldComponentUpdate(){

//     console.log('shouldComponentUpdate');
//      return true;
//    }
//    getSnapshotBeforeUpdate(){
//     console.log('getSnapshotBeforeUpdate');
//      return{};
//    }
//    componentDidMount(){
//      console.log('componentDidMount');
//      return{};
//    }
//     render() {
//       console.log('render');
//       return(<p>hiiiiiiiiiiiii</p>);

// }
//    }
 

// export default App;
