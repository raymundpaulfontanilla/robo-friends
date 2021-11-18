import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba bg-light-green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

// Make it new line of this code

// import React from 'react'

// const SearchBox = () => {
//     return(
//         <input type= 'search' placeholder= 'search robots'/>
//     );
// }

// export default SearchBox;

// like this and wrap it in a <div> tag

// import React from 'react'

// const SearchBox = () => {
//     return(
//         <div>
//             <input
//                 type= 'search'
//                 placeholder= 'search robots'
//             />
//         </div>
//     );
// }

// export default SearchBox;

// after that add tachyons style in <div> and <input> tag of className for the seachbox to make it blue like this

// const SearchBox = () => {
//     return(
//         <div className= 'pa2'>
//             <input
//                 className= 'pa3 ba bg-light-green bg-lightest-blue'
//                 type= 'search'
//                 placeholder= 'search robots'
//             />
//         </div>
//     );
// }

// and also go back to the App Component to make it center using tachyons tc of these <div> and <h1> tag

// and add searchChange as the paremeter of SearchBox which is a function, so I can just say, just like in HTML

// remember in HTML Ic can do 'onchange html', it's an event, that just listening to 'any time the input changes'

// then add 'onChange = {searchChange} after placeholder, then save it then go back to your app open up the console and try type in something in SearchBox

// and look at that I'm getting the event. then go back to App.js to see the continuation in the comments section
