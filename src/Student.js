import React, { Component } from "react";
// y

// import React, { Component } from 'react'

export default class Student extends Component {

  render() {
      
    return (
    
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

// import { useState } from "react";

// export default  class Student extends Component{
//     render(){
//         const arry = [1,2,3,4,5,6,7,8,9,10];

//         const newarry = arry.map((value,i) =>{
//             return <li key={i}>{value*2}</li>
//         }
//         );

//         return(
//             <ul>{newarry}</ul>
//         );
//     }
// }

// function Student(){
//     return(
//         <form>
//             <label> Enter your First Name :-
//              <input type="text" />
//             </label>
//             <label> Enter your Last Name :-
//              <input type="text" />
//             </label>
//             <label> Enter your Sur Name :-
//              <input type="text" />
//             </label>

//         </form>

//     )
// }
//  export default Student;

// function Student() {
//   const [loggedIn] = useState(2);
//   return (
//     <div>
//       {loggedIn == 1 ? (
//         <h1>Welcome 1</h1>
//       ) : loggedIn == 2 ? (
//         <h1>welcome 2</h1>
//       ) : (
//         <h1>welocme 3</h1>
//       )}
//     </div>
//   );
// }

// class Student extends Component{
//     handleClick = () => {
//         console.log('Button Pressed',this);
//     }
//     render(){
//         return(
//             <div>
//                 <h2>hiiiiiiiii</h2>
//                 <button onClick={this.handleClick}>ClickOnmE</button>
//             </div>
//         )
//     }
// }
