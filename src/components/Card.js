import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

// import React from 'react';

// const Card = () => {
//     return(
//         <div>
//             <img src= '' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// output:

// robots
// Jane Doe
// jane.doe@gmail.com

// if you remoe import React from 'react'; it gives you a lot of errors and one of this is:

// React must be in scope when using JSX

// JSX is this

//   <div>
//             <img src= '' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>

// you're not writing HTML you're writing JSX

// and you need to input (import React from 'react');

// so tha't our program understgands JSX syntax

// to get an image of a robot use the robohash website https://robohash.org/

// it can give you a randomize robots if you rename the url after .org into different names

// let's say https://robohash.org/test, https://robohash.org/test2, https://robohash.org/testtest

// like this

// import React from 'react';

// const Card = () => {
//     return(
//         <div>
//             <img src= 'https://robohash.org/test' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// if you have try another test name it gives you a random robot like this

// import React from 'react';

// const Card = () => {
//     return(
//         <div>
//             <img src= 'https://robohash.org/testtest' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// add ?size=200x200 in the img src after the test name to set the size of the robot image like this

// import React from 'react';

// const Card = () => {
//     return(
//         <div>
//             <img src= 'https://robohash.org/test?size=200x200' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// this syntax ?size=200x200 its also given of the homepage website of ttps://robohash.org

// add title after return

// import React from 'react';

// const Card = () => {
//     return(
//         <h1>RoboFriends</h1>
//         <div>
//             <img src= 'https://robohash.org/test?size=200x200' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// Output:

// Syntax error: Adjacent JSX element must be wrapped in an enclosing tag

// because the code its returning a multiple line and to fix that you need to wrap that div in a bracket,

// to make return syntax expecting a single thing like this

// import React from 'react';

// const Card = () => {
//     return(
//         <div>
//             <h1>RoboFriends</h1>
//             <img src= 'https://robohash.org/test?size=200x200' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// Static Multiple Cards that has each Card Component

// Go to the index.js wrapped it in a <div> tag and copy the Card Component and paste it two times like this:

// import React from 'react';import React from 'react';

// const Card = () => {
//     return(
//         <div className= 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img src= 'https://robohash.org/test?size=200x200' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }

// export default Card;
// import ReactDOM from 'react-dom';
// import './index.css';
// import Card from './Card';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//   <div>
//     <Card/>
//     <Card/>
//     <Card/>
//   </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// add styles using tachyons to make it look a card with a 3D design and shadow

// import React from 'react';

// const Card = () => {
//     return(
//         <div className= 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img src= 'https://robohash.org/test?size=200x200' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// To make it Dynamic Multiple Cards that has each Card Component

// its needed to insert a props, and you need a list of robots that has a js file like this:

// export const robots = [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz'
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv'
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net'
//     }
// ];

// and go to 'index.js' to import (robot.js), then it's give you an error says

// 'robots' is defined but never used  no-unused-vars

// because (robots.js) using export instead of export default

// (robots.js) file could have multiple exports, its just so happens that I only have one.

// the rules is, for these ones (import Card from './Card';) becuase these are a default, well you just do

// (import Card from './Card';)

// For ones that aren't default like this  import robots from './robots';, you have to destructure it

// like this import {robots} from './robots';

// so that if you have another variable let's say that says, (cats) like this

// export const robots, cats = [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz'
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv'
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net'
//     }
// ];

// then you will have to do

// import {robots, cats} from './robots'; to grab it

// so you have robots list right? and now you can give it some

// properties like and render it in Card Component like this

// <Card id= {robots[0].id} name= {robots[0].name} email= {robots[0].email} />
// <Card id= {robots[1].id} name= {robots[1].name} email= {robots[1].email} />
// <Card id= {robots[2].id} name= {robots[2].name} email= {robots[2].email} />

// and again you have these curly braces so that it's a JS expression

// and now if you save this its compiled successfully but nothing

// has changed, because you need to go to (Card.js) needs to now

// accept parameters and what are the parameters?

// well it's properties. like this

// import React from 'react';

// const Card = (props) => {
//     return(
//         <div className= 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img src= 'https://robohash.org/test?size=200x200' alt= 'robots'></img>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@gmail.com</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// and these props <h2>Jane Doe</h2> <p>jane.doe@gmail.com</p>are now <h2>props.name</h2> <p>props.email</p>

// and you save that, go back

// output

// props.name

// prop.email

// props.name

// prop.email

// props.name

// prop.email

// Hmm. It's not working. Well becauce this <h2>props.name</h2> <p>props.email</p> is a JS expression right?

// so don't forget to wrap it in curly brackets or braces

// like this

// <h2>{props.name}</h2> <p>{props.email}</p>

// just the way it works in JSX, and if you save it

// you have dynamic names that we're passing as properties to each one.

// and if you need to make <h2> and <p> tag to center

// add text center tachyons syntax (tc) in the 1st div

// like this

//  <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

// then you also passed ID. so you can use ID to do something cool

// if you remember in the ES6 section you have template strings like this

// <img src= `https://robohash.org/test?size=200x200` alt= 'robots'></img>

// and because its a template string you need to wrap it in a curly bracket

// so it's identified as a JS expression like this

// <img src= {`https://robohash.org/test?size=200x200`} alt= 'robots'></img>

// and now within the robohas.org, instead of using test name you can

// randomize what robots you can get

// by using dollar sign ($) in template strings

// and wrap it in curly brackets then insert props.id like this

// <img src= {`https://robohash.org/${props.id}?size=200x200`} alt= 'robots'></img>

// so now this will say robohash.org, ID of whatever it is for the

// robot with the site, so we make sure that again the ID's are

// always dynamic and changing

// one last thing, some programmers make a what you called refractoring

// is the process of restructuring existing computer code—changing.

// the factoring—without changing its external behavior. ...

// By continuously improving the design of code,

// we make it easier and easier to work with.

// like this

// Code Design (Refractor) Although this works, something nicer that you can do is you have

// something called destructuring in ES6

// you need to remove props in all curly brackets to make it

// cleaner like this

// import React from 'react';

// const Card = (props) => {
//     const {name, email, id} = props;
//     return(
//         <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img src= {`https://robohash.org/${id}?size=200x200`} alt= 'robots'></img>
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// and still works right?

// Final Code Design (Refractor)

// another cool thing that you can do and this is even cleaner is

// within the parameters you can do destructuring by remove

// that you declare a while ago in const like this

// const {name, email, id} = props;

// you need to remove that const declaring

// and put it in parameter of Card Component like this

// import React from 'react';

// const Card = ({name, email, id}) => {
//     return(
//         <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img src= {`https://robohash.org/${id}?size=200x200`} alt= 'robots'></img>
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }

// export default Card;

// and now if you save it should still work and it does.

// look for index.js file to see the continuation of comment section.

// You see that's there a bit of delay again because were talking API, and the API's is returning answer for us
