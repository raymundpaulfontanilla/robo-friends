import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import App from "./containers/App";

ReactDOM.render(<App />, document.getElementById("root"));

// Up this point if you look at in your index.js, well there was a lot of copy and pasting that you did.

// in your render like this

// <Card id= {robots[0].id} name= {robots[0].name} email= {robots[0].email} />
// <Card id= {robots[1].id} name= {robots[1].name} email= {robots[1].email} />
// <Card id= {robots[2].id} name= {robots[2].name} email= {robots[2].email} />

// if you had a lot of robot friends, imaging having hundreds of these that you habe to constantly copy and paste

// that's not very efficient is it? also if you remember our diagram of One Way Data Flow you alwats had

// a parent such as an App Component that had children that have their own children and so on and so forth.

// so using that knowledge you can have one big App Component that have different children so that you can

// make each component small and reusable. Now go back to your robot.js

// you ideally can list all 10 users

// the way you do that import Cardlist Component which is a parent of Card.

// like this import CardList from './CardList';

// then make it another JS file and name it CardList.js and remove that all Card Component and paste it

// to another Component named CardList Component and put it inside return syntax and look it to antoher

// comment secton in CardList.js file

// then if you save this, well I'll guess that Card Component isn't being used so you can remove it

// and robots aren't being used, But you can use the import {robots} from './robots';

// now to pass it into CardList Component like this

// ReactDOM.render(
//     <CardList robots= {robots}/>,
//    odcument.getElementById('root')
//  );

// look for CardList.js file to see the continuation of comment section

// But it's not all of them is it?, because in CardList.js you're only grabbing the 0,1,2

// only three of them. and as you saw on robots.js you have 10, Hm. How can you do this better?

// look for CardList.js file to see the continuation of comment section

// instead of having the CardList component, and that CardList component change it to App Component

// and this App Component will be the father of all our children, all our components and render it here and the CardList component

// it should be imported on the App.js including import {robots} from './robots';

// look for App.js file to see the continuation of comment section
