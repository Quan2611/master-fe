//----------------useEffect--------------------
// import React, { useEffect, useState } from "react";
// import "./App.css";
// function App() {
//   const [count, setCount] = useState(0);
// /**
//  * componentDidUpdate
//  * componentDidMount
//  * componentWillUnmount
//  */
//   useEffect(() => {
//     let timer = setInterval(()=>{
//       setCount((count) => count + 1);
//     },1000)
//     return () =>{
//       clearInterval(timer)
//     } 
//   },[]);

//   return <h1>I've rendered {count} times!</h1>;
// }

// export default App;







//----------------useRef--------------------
// import React, { useEffect, useState, useRef, useContext } from "react";
// import "./App.css";
// function App() {
// //   let ref = useRef(0);

// //   function handleClick() {
// //     ref.current = ref.current + 1;
// //     alert('You clicked ' + ref.current + ' times!');
// //   }

// //   return (
// //     <button onClick={handleClick}>
// //       Click me!
// //     </button>
// //   );
// // }

// const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }

// export default App;






//----------------useContext--------------------
import React, { useEffect, useState, useRef, useContext } from "react";
import "./App.css"
const CurrentContext = React.createContext()
function App() {
  const [user, setUser] = useState("Hellu Wuan")
  return (
    <CurrentContext.Provider value={user}>
      <_App/>
    </CurrentContext.Provider>
  );
}

function _App() {
  return (
    <div className="App">
      <Component1/>
    </div>
  )
}
function Component1() {
  const user = useContext(CurrentContext);
  return (
    <div className="App">
      {user}
      <Component2 />
      </div>
  );
}

function Component2() {
  return (
    <div className="App">
      <Component3/>
    </div>
  );
}

function Component3() {
  const user = useContext(CurrentContext);
  return (
    <div>
      {user}
    </div>
  );
}
export default App;