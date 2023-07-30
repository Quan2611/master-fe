// import React from "react";
// import "./App.css";

// class Accordion extends React.Component {
//   render() {
//     const { heading, children } = this.props;

//     return (
//       <div className="accordion">
//         <h1>{heading}</h1>

//         <div className="content">{children}</div>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Accordion heading="This is heading">
//           <div>"This is content"</div>
//         </Accordion>
//       </div>
//     );
//   }
// }

// export default App;

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