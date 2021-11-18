import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

// now here's a problem. you want to return something but it doesn't make sense, does it? if you go back to you App.js, Scroll Component but it's not

// a self closing component right? look at these <Scroll></Scroll> compare to your one of your any component let's say App Component it should be like

// this <App/> which is obviously a self closing component right? which is Scroll Component it wraps component which is your CardList Component like this

// <Scroll>
//      <CardList robots = {filteredRobots} />
// </Scroll>

// so how you can tell the Scroll Component to 'Hey just render whatever's inside of you' which is your CardList Component, Up to this point you've

// learned about 'props' and you've learned about 'state', there's one other thing in React that I want to tech you and that is 'children' and 'children'

// is this <CardList robots = {filteredRobots} /> which means your Scroll Component can use 'children which is your CardList Component as a way to render

// its 'children', what do I mean by that? well in your Scroll.js add 'props' as a parameter of your Scroll Component and every 'props' object has children

// so if you return props.children, well lets see what happens then save it and go back to your website everything's rendered, but if you remove

// props.children and change it to <h1>h1</h1> tag which is header tag then save it again and go back to your website, then you just get that

// you see 'props.children' is excactly that, if you 'console.log(props)' before you return 'props.children' then save it again and go back to your website

// and open up your console again, you see that you get an 'object' and even though them pass any 'props' to your Scroll Component automatically every single

// component in React has this property 'console.log(props)' 'children' which is in your console, its a kind a looks confusing their but it has 'children' object

// and if you expand the 'children' 'object' in your console you can see it has CardList type CardList, so using this 'props.children' you can create components that

// wrap other components, up to this point if you go back to your App.js file you're only able to wrap these lower case components

// <div className = 'tc'> <h1 className = 'f1'>RoboFriends</h1> which are kind of like the HTML tags, but every time you had a custom component like this

// <Scroll></Scroll> and this <CardList/> with a capital letter that you built, well you couldn't really wrap it, now you can use 'this.children'

// then remove your all your codes in the return syntax but here's the cool part using 'props.children', well you can create a scrollable component. let me show you how

// simply do <div></div> tag and inside the <div> tag you can add 'props.children' with a curly brackets like this {props.children} so if you save that and go back to your

// website, well its has no change because you need now is to add styles liked fix to the <div> tag, you can create a Scroll.css file which is another external css file

//and add a style so that scrolalable, but if you want to not create another external css file which is another size of your website I can show you another way which is

// using style and its literally inline style or inline css in your <div> tag, its just like an HTML using that 'style attribute and JSX, you can add styles but using double

// curly brackets, that is first curly brackets is read as JS expression and inside of that curly brackets you returning an object like this {} and that object can have CSS styles

// such as a property 'overflowY' CSS: overflow-y JSX: overflowY 'you must camelCase for JSX' and after that you can say 'scroll', again a CSS way to make the element scrollable.

// then save it and go back to your website

// then go to the Scroll.js file to see the continuation of the comment section
