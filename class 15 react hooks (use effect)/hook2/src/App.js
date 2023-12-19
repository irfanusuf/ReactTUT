import react ,{ useState, useEffect } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

 
  useEffect(
    
    
    () => {document.title = `You clicked ${count} times`; }
  
  
  
  );

  return (
    <div>
      <p>You clicked {count} times</p>
      
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;



// function App() {
//   const [count, setCount] = useState(0);   //use state hook  in which default value of count =0

//   useEffect(
//     () => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return <h1>I've rendered {count} times!</h1>;
// }