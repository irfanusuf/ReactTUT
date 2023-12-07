import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainSection from "./Components/MainSection/MainSection";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (

    <div>

      <BrowserRouter> 
      
       <Navbar />
       <Routes>
       <Route path="/" element={<MainSection/>} />
       <Route path="/Services" element={<Navbar/>} />
       <Route path="/" element={<MainSection/>} />
       <Route path="/" element={<MainSection/>} />
        
       </Routes>

      
      <Footer />
      
      
      </BrowserRouter>
     
    </div>     

  );
}

export default App;
