import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;

// const CardList = ({robots}) => {
//   return(
//       <div>
//           <Card id= {robots[0].id} name= {robots[0].name} email= {robots[0].email} />
//           <Card id= {robots[1].id} name= {robots[1].name} email= {robots[1].email} />
//           <Card id= {robots[2].id} name= {robots[2].name} email= {robots[2].email} />
//       </div>
//   );
// }

// amd mow CardList Component will be the one that returns all of the 3 Card Component

// and after that go back to index.js, and render the CardList Component like this

// ReactDOM.render(
//     <CardList/>,
//    document.getElementById('root')
//  );

// now CardList Component is accepting a robots prop, then if you save this another error but for now it

// is in CarsList.js file not index.js, becuase you don't have any access to robots and IDs and, well

// card for that matter either so you need to import Card Component,

// if you save then you have another error says

// robots isn't defined we know that CardList Component receives robots now so you have acccess to it

// in the props like this const CardList = (props) => {}

// or you can destructure it inside curly brackets to make it cleaner like this

// const CardList = ({robots}) => {}

// and say that you have access to it with robots. then IF you save this I have everything back the way it was.

// look for index.js file to see the continuation of comment section

// Its looks like you need to do some sort of a loop right? you make it to loop over the robots and create

// a Card Component for each one, how can you that here in React?

// by adding another variable in the CardList.js file well call it const cardsArray. and within the cardsArray you want to say that robots

// you want to, well you have to do? When you do a loop as I've said before, you need to map, right?, you could do forEach as well

// but I always recomment doing map, and within this map array method each robot gets this

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz'
// },

// so you get a user every time you map through it. so you can put inside the parameter is user and should return again

// because a map needs to return right?, so you need to return and cut the Card Component inside your <div> tag and paste it or return it

// in your new variable which is cardsArray, and within the return of the cardsArray you can just say now instead of robots[0] - you can add the 2nd parameter

// which is index or (i), because array map method is always have an index(i) as a 2nd parameter and now within robots change index[0] to [i]

// each time the 1st time around this [i] will be zero then 1 then 2 all the way to 9 include your 10 robots,

// then remove all of the Card Component inside your <div> tag and returnyour new variable cardsArray to display 10 robots

// don't forget to wrap it in curly brackets becauase it's JS expression, so it knows to evaluate then save it and go back to your website

// it's display all the list of 10 robots Cards in your robots.js by using Array map method to return multiple components.

// then in your website try to open the console and see that you get a warning (Each child in a list should have a unique "key" prop.)

// and it's give you a link https://reactjs.org/link/warning-keys, If you want to read up more on it

// this is a special case that you just have to remember. When working with react the way the virtual DOM works is it keeps track of what all these cards are

// <Card id= {robots[i].id} name= {robots[i].name} email= {robots[i].email} />

// but without having something called a key prop, some of your cards in your website get deleted, React won't know. which one's which and you'll have

// to change the entire DOM. Versus if it had a key prop that say's oh that one card in your website gets removed

// you can just remove that card from the DOM. Remember you want to minimize the amount of work that you do the DOM

// so when you do a loop it's just something you have to remember, You have to give it a unique key.

// In our case you can say i which is index and wrap it in a curly brackets, then save and look in your website and open again your console

// and you see you don't have error any more

// BONUS: key prop should have something that doesn't change. For example, index (or i in our case) could change if array items get moved.

// so a better key in this case would be something unique like id.

// Code Design Refractor

// make your Card Component inside your cardComponent variable in a new line, just so it looks prettier like this

//     const cardsArray = robots.map((user, i) => {
//         return <Card
//         key= {i}
//         id= {robots[i].id}
//         name= {robots[i].name}
//         email= {robots[i].email}
//         />
//     })
// }

// and because you're returning it on multiple lines, you nee to wrap it in a bracket right? like this

// const cardsArray = robots.map((user, i) => {
//     return (
//     <Card
//     key= {i}
//     id= {robots[i].id}
//     name= {robots[i].name}
//     email= {robots[i].email}
//     />
//     )
// })

// Final Code Design (Refractor)

// look for the 2nd return in your CardList.js which is {cardComponent}, this is a JS expression anything you put inside the curly brackets

// including comments like this {//asndja}, well you can just copy and paste this and jsut add it to your return within the curly brackets

// robots.map((user, i) => {
//     return (
//     <Card
//     key= {i}
//     id= {robots[i].id}
//     name= {robots[i].name}
//     email= {robots[i].email}
//     />
//     );
// })

// and remove the const cardComponent =

// then save it, it should still work, like it does

// now go back to your index.js to make a title, searchbox amd to build an officially big App Component

// if you go to this CardList.js it just reads the props that it receives and it just renders something. and this one way data flow

// is really nice because that CardList is a pure function. It receives an input and then it always returns the same output

// so if robots are always the same it's always going to return the same thing. Its deterministic, pure functions, and its something

// that you've talked about before and that is really really good thing.

// that CardList components are what's called 'pure components', and some even calll it 'dumb components'

// it just means that they don't really know about anything other than the fact that they're pure functions that receive something and return something.

// and that is really nice because we always know what this is going to look like, and that's all you had to in SearchBox.js if you go back to that file

// go back to App.js to see the continuation of comments section
