import React, { Component } from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading.....</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;

// add return <h1> title wrap it in <div> tag to return just one single parent, then create a SearchBox Component after <h1> tag like this

// import React from 'react';
// import CardList from './CardList';
// import {robots} from './robots';
// import SearchBox from './SearchBox'

// const App = () => {
//     return(
//         <div className= 'tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots= {robots} />
//         </div>
//     );
// }

// export default App;

// then import it here, after that go back for SearchBox.js file to see the continuation of comment section

// now, how you can make this interactive? Up until now we've just had these static website, but real websites are interactive right?

// well think about this logically, you have an App Component, a SearchBox Component and you have a CardList Component.

// but the SearchBox Component needs to communicate with the CardList Component, and same thing with the CardList Component.

// CardList Component need to know what is in the SearchBox Component so that it can filter out robots accordingly.

// look again for the One Way Data Flow diagram.

// well in order to do this, React has an idea of something called 'state'. Up until now you learned about props such as properties

// that you keep passing down, but you've never changed them because React just reads the props.

// go back to CardList.js to see the continuation of comments section

// but now you have to worry about something other than props, because props never changed. props are always just inputs that you get

// and you've never modified them, But in this case you need a memory in our app, that SearchBox Component need to communicate to

// CardList Component and also change and update accordingly

// and that's what state is in React. 'State' and you'll hear this in computer programming a lot - simply means the description of your app

// a 'state' is simply an object - an object that describes your application, and that 'state' which describes our application is the robots

// and whatever's entered in the SearchBox Component and 'state' is able to change, you've, able to change the value of the SearchBox Component

// the value of the input, and you're able to change what robot's array means what gets displayed

// that is the rule that you just have to remember. Props are simply things that come out of 'state'

// so a parent feed 'state' into a child component and as soon as a child (components) component receieves a 'stete' its a property

// that child can never changed that property. the parent just tells it what the 'state' is and the child received it as robots

// so the first thing you need to do is to start being able to use 'state' in your app, the description of what our 'state' should be

// you need to do constant 'state' and this state is a type of an object that needs to have a robots property  and has a value of robots

// and it needs to have searchfield property and has a value of empty string like this.

// const state = {
//     robots: robots,
//     searchfield: ''
// }

// and that is just whatever your search field needs, but in order to use that 'state' you have to go back to our original way that you've created

// React Components if you remember the default Component when you first did 'npx create-react-app' change 'const App = () => {}' into class App extends React.Component{}

// after that change import React from 'react' into import React, {Component} from 'react' then in class App extends React.Component{} remove the React. so final is

// class App extends Component{}

// another thing is if you do directly class App extends Component{} the import React from 'react' is automatically change into import React, {Component} from 'react'

// try that to look the difference of the two

// and after that declaring a class App extends Component{} is has always a render function that has to return something, which is this

//     return(
//         <div className= 'tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots= {robots} />
//         </div>
//     );

// so the code is

// import React, { Component } from 'react';
// import CardList from './CardList';
// import {robots} from './robots';
// import SearchBox from './SearchBox';

// const state = {
//     robots: robots,
//     searchfield: ''
// }

// class App extends Component{
//     render() {
//         return(
//             <div className= 'tc'>
//                 <h1>RoboFriends</h1>
//                 <SearchBox />
//                 <CardList robots= {robots} />
//             </div>
//         );
//     }

// }

// export default App;

// if you save you've get an error say's 'state' is assigned a value but never used,

// so how you can add 'state'? well, in React you simply do a constructor(){} after declaring a class App extends Component{}

// after that you've need to remember from when we spoke about objects, and that constructor, you can declare the state from your first const state

// cut this robots: robots,searchfield: '' from your const state, then inside the curly brackets of the constructor you can declare the state by using

// this.state= {} then paste it inside the curly brackets of your declared state like this

// constructor() {
//     this.state= {
//         robots: robots,
//         searchfield: ''
//     }
// }

// then remove const state = {}, but not in inside the constructor, so if you save that, you get an error says 'this' is not allowed before 'super()'

// again something that you might remember from the advanced obnjects video in order to use 'this', you need to insert super() which calls the constructor of component

// then if you save that, everything's working fine

// and now you have 'state' working fine inside the curly brackets, which is robots and searchfield, and that 'state' as I've said before is what describes your app

// those are the things that can change, and that's what 'state' is something that can change and affect your app

// and they usually live in the parent component which is the class App extends Component{}, the component that is the parent that just kind of passess

// 'state' to different components, and now you can access 'robots', not from here import {robots} from './robots';, but from 'this.state.robots'

// inside your render in this App.js that has CardList Component with a robots like this <CardList robots= {this.state.robots} />

// so if you save that everything again is working as expected

// and do you see that our 'state', which is 'robots', is now passed down as 'props' so CardList.js accepts 'robots' as props even though in the App.js its a 'state

// and like I said because 'App' now owns 'state' that includes 'robots', its allowed to changed it.

// now the way we can communicate them, you have these values robots: robots, searchfield: ''

// and ideally in the SearchBox Component you have something called 'onSearchChange' which again is a function that I'm just going to make up

// that onSearchChange(){} is just a random name that I've created and 'onSearchChange(){} I want to say that every time the input changes

// just like you did with DOM manipulation, you get an event and within this event I'm goind to 'console.log' that event like this

// onSearchChange(event) {
//      console.log(event);
// }

// it explains that I've created a onSearchChange(){} function, and I want any time SearchBox Component changes to trigger 'console.log

// so you can pass that function now in the SearchBox Component, I can say 'searchChange = {onSearchChange}', but again because this two values

// robots: robots,searchfield: '' is an object to grab it you have to do 'this.(this(DOT)' (which is the App) 'onSearchChange' is searchChange

// and used it as a destructuring to allow us to grab the props object which is a parameter and grab its properties

// if you save this and now go to the SearchBox.js and look for the continuation of the comments section

// and this is just something you have to remember is that within the event which is 'console.log(event)' you always have 'event.target.value'

// which should give us the value of the search term in the console, then save it again and type in the SearchBox Component

// look at that, we're now noticing the difference as we type its literally gets what are you press in the keyboard by using the event which has always

// event.targer.value, but now I have the value of the search input that show's in the console, I can now directly communicate that search input to the 'robots' list

// create a variable inside the onSearchChange function which is an event, let's say 'filteredRobot' and this will equal the 'this.state.robots'

// and that robots, which is the array, again that's how you access 'state' is going to use filter, filtering our array we give it 'robot'

// and now our array will have to return a condition, and the condition is going to be 'robot.name' and you're going to do something

// that you've havent seen before which is 'to.LowerCase' and that method is comes with all strings, and it just makes everything lowercase

// and this is good for comparisons wo you don't have to compare capitalized or lowercase, and if the 'name' of 'robot', which is now lowercased

// 'includes' its another method and again it's pre-built into JS if it 'includes' the 'searchfield' with includes this.state.searchfield

// and again you need to do 'toLowerCase' in case you use capitals or lowercase, it works both ways like this, then if yo save you get an error says

// 'filteredRobots' is assigned a value but never used, but don't worry you can now 'console.log' filteredRobots in the onSearchChange function

// then if you save it's compiled successfully, but if you go to app and youy tpye or search something in the SearchBox Component you get an error

// and that error is very very confusing it is tricky for your first time but bear with me here

// the problem right now is that the value of 'this' in the filteredRobots, well it's not referring to the App Component

// because the event happened in the 'input' which is in the SearchBox.js the value of onChange = {searchChange} well the <input/> tag

// and the <input/> tag doesn't have 'state.robots', and that is a trick that you always forget, but just keep this in mind

// as a rule of thumb with anything that comes from React, so constructor and render are pre-built in React, any time you make your own methods on a component

// use this = => syntax arrow funtions, and this makes sure that the 'this' value in the filteredRobot is according to where it was created

// which is the App Component like this  onSearchChange = (event) => {} rather than this onSearchChange(event) {}

// I know it's confusing you can up read more about it I'll leave a resource for it, It's a tough topic to get, but again rule of thumb use the arrow function

// If I do this now and I click, there you go I now get all 10 'robots' in the robots.js which is an objects that inside the array

// like this

// import React, { Component } from 'react';
// import CardList from './CardList';
// import {robots} from './robots';
// import SearchBox from './SearchBox';

// class App extends Component{
//     constructor() {
//         super()
//         this.state = {
//             robots: robots,
//             searchfield: ''
//         }
//     }

//     onSearchChange = (event) => {
//         this.setState({searchfield : event.target.value})
//         const filteredRobots = this.state.robots.filter(robot => {
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
//         })
//     }

//     render() {
//         return(
//             <div className = 'tc'>
//                 <h1>RoboFriends</h1>
//                 <SearchBox searchChange = {this.onSearchChange} />
//                 <CardList robots = {this.state.filteredRobots} />
//             </div>
//         );
//     }

// }

// export default App;

// but here's the thing, 'searchfield' right now you see that I still have 10 robots, it's not really filtering anything

// but first remove the console.log(event.target.value)

// and that is because my 'searchfield' is always an empty string in your 'state' method, in order to update the state

// again another rule of React is to do 'this.setState()' in your onSearchChange function which is an event,

// and it's again a method that comes with React and anytime you want to change state you always do this, you don't do 'this.state.searchfield =' you never do that

// you have to do 'this.setState()' which is an object then searchfield is now going to be 'event.target.value'

// like this 'this.setState({searchfield : event.target.value})'

// if i save this and go back, you see that now everything is being filtered

// so I'm changing the state so that the 'searchfield' always gets updated, and now you're filtering the robots according to the changed 'searchfield'

// then after that remove your 'console.log(filteredRobots)' in the onSearchChange function

// so one last thing, looking at your code you have the fact that filter robots is still not assigned, and you're right

// so now you need to communicate it to the 'filteredRobots', what you can do is that 'filteredRobots'

// can now be used as props instead of 'this.state.robots' in the CardList Component

// cut you're decalred filteredRobots and paste it under render, and now you have access to 'filteredRobots', and instead of passing 'this.state.robots'

// remove it and you simply pass 'filteredRobots', then if you save that, make sure the SearchBox.js part saved as well and now go back to your app

// and close the JS console, look at that you have an app working

// Full Explanation on how this App.js works

// you have App Component that has two states 'robots' and 'searchfield' and because 'App' owns the state, any component that has 'state' uses the

// 'class' syntax so they can use the 'constructor' function to create 'this.state', and that state which is 'robots' and 'searchfield' is what changes

// in an app its what describes the app, Remember what I said the virtual DOM is just a JS object? the virtual DOM is just an object that collects

// that 'state' which is 'robots' and 'searchfield' and React uses this those state to render and pass them down as props to CardList Component which is

// <CardList robots = {filteredRobots} />, so that CardList Component that are just pure functions can just render and you always know that the App Component

// is going to look the same, because well, they're just simple pure functions, you manage the state in your 'filteredRobots', the App Component is the

// only thing that can change those 'state' in your 'filteredRobots', But it can pass down things such as props, so you passed down 'onSearchChange'

// to the SearchBox Component, and the 'SearchBox' Component, every time there's an 'onChange' on the input, it lets the 'App' Component know it says

// 'Hey, there was a change' and after that it runs the 'onSearchChange' function with the event and updates the 'state' of the 'searchfield'

// which is searchfield: '' and what ever you type like this searchfield: 'asdasdasd'

// now with the information that you have from the SearchBox Component, you can now communicate to the CardList Component and tell it

// 'Hey, I want to filter the 'robots' 'state' which is in the return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

// to now have only what includes in the 'searchfield' and instead of passing that 'this.state' in your CardList Component

// which is <CardList robots = {this.state.robots} /> then you just passed the 'filteredRobots' like this <CardList robots = {filteredRobots} />

// you might be asking yourself well, 'robots' in the 'state' which is this.state = {robots: robots,} never really changes, does it?

//  you always just create a new array called 'filteredRobots' and you always pass that down in the Cardlist Component which is <CardList robots = {filteredRobots} />

// Does 'robot' in the 'state' is need to be part of the 'state'? and right now not really because you've just have a hard coded 'robots' from another file which is

// import {robots} from './robots';, but when you get later on in to the course you'll see that that's not the case

// because most of the time you're getting the users or robots from another place over the internet in which case you will need 'robots' to change from

// an empty array like this this.state = {robots: [],} to an array after you go and grab all of our users

// for now as you know, if you want to change the CSS of our entire app, well you have to go to the 'index.css' and then you can just put in the

// gradient that you want. like this

// body {
//     background: linear-gradient(
//     right,
//     rgba(7, 27, 82, 1),
//     rgba(0, 128, 128, 1) 100%
//   );
// }

// then save it

// let's make this app more realistic in a real life app you wouldn't neccessarily have those robots on your website

// written in the robot.js I've just created that file but in real life, well you're not manually entering users, istead of doing that

// you should use something like an API like this https://jsonplaceholder.typicode.com/

// Free fake API for testing and prototyping. Powered by JSON Server + LowDB

// As of Dec 2020, serving ~1.8 billion requests each month.

// and what that means well you want, when your website gets loaded, to make a request somewhere out there, in the real world

// of the internet and grab those robots from a server. Well you can actually do that. because you have something called

// 'JSONPlaceholder' and you don't need to worry to much about it they actually have a really nice URL in this

// website https://jsonplaceholder.typicode.com/ then scroll it down and find 'Resources' and click /users and it should be like this

// https://jsonplaceholder.typicode.com/users after that you can use, and they return what you need

// such as a name, an ID and a username. the rest of the information well you don't really need it. But as you can see jsut by

// typing in this url https://jsonplaceholder.typicode.com/users you get this

// https://jsonplaceholder.typicode.com/users

// [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },

// so using that URL you're going to make your app a little bit more realistic. let's get started

// looking on your App Component you see that it is what you call a smart component unlike SearchBox and CarList Component

// that are just pure functions as you can see on your CardList.js file. App.js actually has 'state', a piece of data that

// describes your app, and because they have 'state' you call them smart components. and smart components tend to have

// this class syntax 'class App extends Component{}' Now in real life when you start up this app that has a 'robots' property

// with a value of 'robots' it would actually be an empty array because there's nothing there

// this.state = {
//             robots: [],
//             searchfield: ''
//         }

// because you haven't grabbed the users

// so most likely if you save and go back to your website, robots wouldn't display until I load the Website, and then as soon as the website loaded

// I ask for the users from somewhere over the internet which is this 'https://jsonplaceholder.typicode.com/users', so let's do that.

// React comes with a few other things inside of components that you can use and they're called 'lifecycle' methods look in this website

// 'https://reactjs.org/docs/react-component.html', don't get too overwhelmed those are just methods that you can use in the 'App.js'

// that comes with react and they're called 'lifecycle hooks', because what they do is If you run these four 'lifecycle hooks'

// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()

// it will automatically trigger when your App.js gets loaded on the website, let me explain you see that they have three sections which is

// Mounting
// Updating
// Unmounting

// The way react works is you do something called 'mounting'

// when you click refresh in your website your App Component - which is 'App.js' gets mounted which is ReactDOM.render(<App />, into the document

// which is document.getElementById('root') with the id of 'root' then if you go back to your index.html, then look for your <body> tag

// well your web page is nothing but a div with an id of 'root' like this '<div id="root"></div>', When you say you mount a component, you're replacing

// this '<div id="root"></div>' and adding your entire app which is in you 'App.js' that's explained how mounting works, So mounting is the start

// of the app which is your App Component inside your 'App.js' file, Now when mounting, these are

// Mounting
// Updating
// Unmounting

// the 'lifecycle hooks' that get hit, and they are in order, so the first thing look for the website which is this 'https://reactjs.org/docs/react-component.html'

// then it checks this inside the Mounting which is 'constructor()' and say 'Hey does 'constructor()' have a constructor?',

// Will your App Component in your 'App.js' file which is this

// class App extends Component{
//     constructor() {
//         super()
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }
// }

// have a 'constructor?', Its obviously YES, then run this piece of code

//         super()
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }
// }

// does it have 'static getDerivedStateFromProps()?', Its obviously NO, it doesn't Then ignore it, does it have 'render()?' Its obviously YES, then run this piece of code

// const filteredRobots = this.state.robots.filter(robot => {
//     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
// })
// return(
//     <div className = 'tc'>
//         <h1 className = 'f1'>RoboFriends</h1>
//         <SearchBox searchChange = {this.onSearchChange} />
//         <CardList robots = {filteredRobots} />
//     </div>
// );

// does it have 'componentDidMount()'?, Its obviously NO, it doesn't have 'componentDidMount()' then ignore it and it just runs through that website every time

// it also has something called 'Updating', whenever a component changes, For example, when you had the list, well every time you type something

// in your SeachBox Component, the CardList Component gets re-rendered because you have new information, the function receives new inputs, same with the input component

// so again within those components, if you wanted to, you can add 'componentWillReceiveProps()', shouldComponentUpdate(), and so on and so forth

// and finaly, with 'Unmounting' is when a component is removed from a page, for example it you change to a different page of your website, the component

// will unmount, the App Component will get deleted from the page, those are called 'lifecycle hooks' because they get run every time a componend does

// something and it comes with react, so you can just put them in into your Class Component and they'll automatically get triggered,

// you don't have to worry about calling them. Let me demonstrate this for you

// first you want to use is 'componentDidMount()' which gets called after render. This says that yes your App Component is mounted on the web page

// and it is rendered that is it's displaying something, well you can do that by inserting the 'componentDidMount()' after 'constructor()' method

// and because this is

// class App extends Component{
//     constructor() {
//         super()
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }
// }

// part of react, notice that I'm not using arrow functions like this one

// onSearchChange = (event) => {
//     this.setState({searchfield : event.target.value})
// }

// because that is not part of react not literally, is just a random name that I've created, now within 'componentDidMount()' method you can do

// 'console.log('check')', if you save and go back to your website and open up the console, you'll see that you have check if you refresh again

// in can console.log('check') again in you console, that was really quick, but you see that, that gets called automatically even though you haven't said anything

// using this robots: [], you can do something interesting, first remove the console.log('check') in you 'componentDidMount()' method

//and now when 'componentDoesMount()' method you can do in your 'componentDidMount()' method is 'this.setState'

// to now have 'robot' to the 'robots' which is import {robots} from './robots'; that you get from the robot.js file like this

// componentDidMount() {
//     this.setState({robots:robots})
// }

// if you save and refresh and see what happens, its really really fast but you see that you're getting our robots

// without getting a delay compare to the old one that you always talk to the API

// the explanation of that is this, run the constructor which an empty array which is 'robots:[]' then if you want to show this 'componentDidMount()'

// method doing behind the scene when you open up the console and just to show you the order of execution here, so if you add console.log('1')

// inside your the 'constructor()' method after your 'this.state={}' then copy this console.log('2') then make it 2 and paste it after 'this.setState in your 'componentDidMount()' method

// then lastly paste it again after the filteredRobots and make it 3 like this console.log('3') to show you that those are in order in this website 'https://reactjs.org/docs/react-component.html' when they get run

// if you save and open up your console you have 1, 3, 2, 3, hmmm.. let me me exlain

// you have 1, that runs first which is 'constructor()' method, then 3 which is 'render()' method, then 2 which is 'componentDidMount()' method

// and then 3 runs again which is 'render()' method again

// actually let's change those numbers into actual words so that you see better what is actually happening behind the scend when you open up the console

// console.log('constructor()')
// console.log('render()')
// console.log('ccomponentDidMount()')
// console.log('render()')

// why did render run again, if you remember you created the 'constructor()' method, then run 'render()' method and then it updated the 'state'

// and 'componentDidMount()' method, so because you updated the 'state' changes Remember you go through the 'lifecycle' its updating and it runs render again

// like I've said its in order in this website 'https://reactjs.org/docs/react-component.html' like this

// Updating

// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// so the final order in that website is this

// Mounting

// constructor() RUN 'constructor()' method
// static getDerivedStateFromProps() IGNORE
// render() RUN 'render()' method
// componentDidMount() RUN 'componentDidMount()' method

// Updating

// static getDerivedStateFromProps() IGNORE
// shouldComponentUpdate() IGNORE
// render() RUN 'render()' method again
// getSnapshotBeforeUpdate() IGNORE
// componentDidUpdate() IGNORE

// so because it goes from an empty array in your website to a 'robots' list render gets re-run, and the virtual DOM notices that there's a difference

// and repaints your web browser to include the 'robots' knowing what you just did, you can remove all of your 'console.log()'

// and finally make your App more realistic and instead of using the robots.js file you can remove this import {robots} from './robots';

// and in your 'componentDidMount()' method you can grab this list https://jsonplaceholder.typicode.com/users, first copy this link https://jsonplaceholder.typicode.com/users

// then under the 'componoentDidMount()' method insert 'fetch()' method which you'll learn about in the next section and just make that HTTP request

// and 'fetch()' method receives this link 'https://jsonplaceholder.typicode.com/users' like this fetch('https://jsonplaceholder.typicode.com/users')

// then add '.then()' method which means when you always make a 'fetch()' method its always receives 'response' arrow function

// and also you need always return and convert a response into '.json' and put it inside your 'response' arrow function file but don't worry we'll talk about in the next section

//for now you can copy and paste that code along, we'll come back to that and explain what's happening and outside of the 'response' arrow function

// add again '.then()' method with a parameter of 'users' arrow function because in this case you're getting users, then inside of that 'users' arrow function

// cut this code this.setState({robots:robots}) and make the value of the property of 'robots' to 'users' like this this.setState({robots:users})

// and paste it inside of the 'users' arrow function, so the code is

// fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     return response.json()
// })
// .then(users => {
//     this.setState({robots:users})
// })

// and save it then go back to your website and click refresh, you see that little lag, it is now working

// Final Code Desisgn (Refractor) make all the arrow functions into single line like this

// componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({robots:users}))
// }

// so you're fetching whatever the users are then you're getting a response then add some magic here '.json()' which we'll talk about later then you're

// and lastly you're getting the 'users' and updating the 'users' using 'setState()' so if you go back to your website and refresh again

// if you don't do this 'this.setState({robots:users})' and return an empty oject like this 'this.setState({})' then if you save it and go back to your website

// you see that you don't receive the 'robots' you're only receive the 'robots' after you update with these users 'https://jsonplaceholder.typicode.com/users'

// and this is probably looks pretty scary

// fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => this.setState({robots:users}))

// to make you fee a little bit more comfortable, because you're using 'fetch()' method and there is nothing attached to it, does that mean its part

// of the windows object?, let's check if you open up the console and type window.fetch, so it's working 'fetch()' is a method om the windows object

// it comes with all browsers now, it is a tool for us to make requests to servers, and as you can see this 'https://jsonplaceholder.typicode.com/users'

// is a server that returns for us when you do slash(/) 'users' a list of users that you can use which is perfect for your app

// and finally you're wondering, what if this

// fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => this.setState({robots:users}))

// was really slow or whatever that took I don't know five seconds? and you had a whole ton of users, well in that case you can do something like an

// if else statement, 'if(robots.length ===0)' in that case you can return <h1>Loading</h1> then inside of 'else' statement is this

// return(
//     <div className = 'tc'>
//         <h1 className = 'f1'>RoboFriends</h1>
//         <SearchBox searchChange = {this.onSearchChange} />
//         <CardList robots = {filteredRobots} />
//     </div>
// );

// again it;s just JS that's a beauty in react then if you save you get an error says ''robots' is not defined' because 'this.state.robots' again you're

// referring to the state of the app, and if you refresh your website, lets say that you're not updating the 'state' and you're going to return an empty object

// so you can see the result of your <h1>Loading.....</h1> tag then if you save and go back to your website you get the Loading..... header

// and this is how you build real apps with react, you have a loading bar, they can just add here 'return <h1>Loading.....</h1>' then make request on

// your 'componentDidMount()' method and interact with components. You know what, we have ourselves our app. There's one last thing I'm going to show you with react

// and you've learned the basics and react. You can take this now to build any app that you want.

//So one more thing to go. One more little piece to get our react knowledge completed.

// heres is the last issue that can you fix, If you minimize your website make it look a like run in mobile device, its responsive and it looks good right?

// but if you scroll down, well you lose you're SearchBox Component which is Search Engine or Searh Bar at the top, wouldn't it be nice if that was at the top and

// you have a scroll that you can do and still use your SearchBox Component which is Search Engine or Searh Bar through you're robots list?

// you might be thinking there's propbably a CSS style that you can add in your website, but you need to illustrate the fact that React and why React so good

// is because you can create Components that are reusable, not just Card Components but functionality, would it be cool if there was maybe something where you can

// add around at ardList Component, maybe you can create a Scroll Component and that Scroll Component just wraps the CardList Component and now CardList Component

// will be completely scrollable, But now you can use Scroll Component anywhere in your app, any time you need something, you can just wrap it around

// is it possible?, let's give it a try, first import that component which is Scroll Component in your App.js file then create a file in the src folder named it Scroll.js

// then go to the Scroll.js file to see the continuation of the comment section

// Final Code Design (Refractor)

// you see there's a repeating of 'this.state.' which are 'this.state.robots' and 'this.state.searchfield', well if you remember rule of thumb of a programmer is

// Do not Repeat Yourself(DRY), so you can do by using 'destructuring' like this

// const {robots, searchfield} = this.state then change remove 'this.state' in this 'this.state.robots' and 'this.state.searchfield' to 'robots' and 'searchfield' like this

// const filteredRobots = robots.filter(robot => {
//     return robot.name.toLowerCase().includes(searchfield.toLowerCase())
// })

// if(robots.length=== 0) {}

// instead of this

// const filteredRobots = this.state.robots.filter(robot => {
//     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
// })

// if(this.state.robots.length=== 0) {

// and lastly you notice your if else statement like this one

// if(this.state.robots.length=== 0) {
//     return <h1>Loading.....</h1>
// } else {
//     return(
//         <div className = 'tc'>
//             <h1 className = 'f1'>RoboFriends</h1>
//             <SearchBox searchChange = {this.onSearchChange} />
//             <Scroll>
//                 <CardList robots = {filteredRobots} />
//             </Scroll>
//         </div>
//     );
// }

// there's actually an easier way of doing that which is the result is samething, instead of doing this you can remove this '===0'

// if(robots.length=== 0) {}

// and before robots.length add exclamation point like this if(!robots.length) {} which means 'Is there's no robots we're loading

// and if you see if else statement you can do it a short one can't we?, well you need to do a 'ternary operator' like this

// return (!robots.length) ?
//             <h1>Loading.....</h1> :
//             (
//                 <div className = 'tc'>
//                     <h1 className = 'f1'>RoboFriends</h1>
//                     <SearchBox searchChange = {this.onSearchChange} />
//                     <Scroll>
//                         <CardList robots = {filteredRobots} />
//                     </Scroll>
//                 </div>
//             );

// and lastly i can teach you the last thing that you need to learn before you deploy your app in the github, ;et's talked about

// something called 'error boundaries' and this 'error boundaries' solved the problem that React has previously which was, if there

// were some sort of an error within a component for whatever reason there wasn't a graceful way to handle it, on the next render

// you'd get all these cryptic errors and things just wouldn't work out nicely. and for a user you want to make sure that even if

// a part of your component tree breaks, you can still have a nice UI experience, maybe a piece of text that says something went wrong

// but not have the app break, let's get started first thing to do is in the component folder you're goind to add a file named it

// ErrorBoundary.js and just a reminder you do need React version 16 or higher for this to work.
