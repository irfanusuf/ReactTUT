import react , { createContext} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
export const myContext = createContext();



function App() {


 

return (
    <myContext.Provider value={"Robokids.com"}>
      
      <Navbar />



    </myContext.Provider>
  );
}

export default App;
