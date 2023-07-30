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

import React, { useState } from "react";
import "./App.css";
import classNames from "classnames";

class TodoItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div
        onClick={() => this.props.onItemClick(item)}
        className={classNames("todo-item", {
          done: item.isDone,
        })}
      >
        {item.title}
      </div>
    );
  }
}

function App() {
  const [done,setDone] = useState(false)
  const [newTodoItem,setNewTodoItem] = useState("")
  const [todoItems,setTodoItems] = useState([
     {
       id: 1,
       title: "Cafe",
       isDone: false,
     },
     {
       id: 2,
       title: "Work",
       isDone: true,
     },
     {
       id: 3,
       title: "Watching movie",
       isDone: true,
     },
   ],
  )
    
  const onItemClick = (item) => {
    setDone(!done); 
    const _todoItemIndex = todoItems.findIndex(
      (_item) => _item.id === item.id
    );
    const _todoItems = todoItems;
    _todoItems[_todoItemIndex].isDone = !_todoItems[_todoItemIndex].isDone;
    setTodoItems(_todoItems);
  }
  
  const onInputChange = (event) => {
    setNewTodoItem(event.target.value);
  }
  
  const onAddNewTodoItem = (event) => {
    if (event.keyCode === 13) {
      setTodoItems([
          {
            id: todoItems.length + 1,
            title: newTodoItem,
            isDone: false,
          },
          ...todoItems
        ])
        setNewTodoItem("")
    }
  }
    return (
      <div className="App">
        <input
          onChange={(event) => onInputChange(event)}
          value={newTodoItem}
          onKeyUp={(event) => onAddNewTodoItem(event)}
        />
        {
          todoItems.map((_item, index) => {
          return (
            <TodoItem
              onItemClick={(item) => onItemClick(item)}
              item={_item}
              key={index}
            />
          );
        })}
      </div>
    )
}

export default App;