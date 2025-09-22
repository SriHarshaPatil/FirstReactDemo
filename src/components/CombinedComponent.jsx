// import { useState } from "react";

// function Counter() {
// const [count, setCount] = useState(30);

// return (
// <div className="counter-container">
// <h1>React Counter</h1>
// <p className="count">{count}</p>
// <div className="buttons">
// <button onClick={() => setCount(count - 5)}>- Decrement</button>
// <button onClick={() => setCount(count + 10)}>+ Increment</button>
// <button onClick={() => setCount(30)}>Reset</button>

//   </div>
// </div>
// );
// }

// export default Counter;

import { useState } from "react";

function CombinedComponent({ name, age, img }) {
 const [count, setCount] = useState(0); // initial count = 30

 const handleClick = (action) => {
  if (action === "increment") setCount(count + 10);
  else if (action === "decrement") setCount(count - 5);
  else if (action === "reset") setCount(30);
 };

 return (
  <div className="container">
   {/* Props section */}
   <div className="user-info">
    <h1>Name: {name}</h1>
    <h1>Age: {age}</h1>
    <img src={img} alt={name} width="150" />
   </div>

   {/* Counter section */}
   <div className="counter-container">
    <h2>React Counter</h2>
    <p className="count">{count}</p>

    <div className="buttons">
     <button onClick={() => handleClick("decrement")}>- Decrement</button>
     <button onClick={() => handleClick("increment")}>+ Increment</button>
     <button onClick={() => handleClick("reset")}>Reset</button>
    </div>
   </div>
  </div>
 );
}

export default CombinedComponent;