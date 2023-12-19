import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {


const [posts, setPosts] = useState([]);     //empty array passed in use state , it will be the default state of posts
const [params, setParams ]= useState (posts); 
 

function handlePhotos (){
 
setParams ( photos)
}

  
    
   
  useEffect(()=> {

  axios.get(`https://jsonplaceholder.typicode.com/${params}`)
   .then (response => console.log(response));
}
, []);  



  return (
    <div>
      <h1> Axios Tutorial</h1>


      <button onClick={handlePhotos}> photos</button>



      <div className='cards'>
      {
        posts.map(post => (

      
           <div  className='card'> 

             <img src= {post.thumbnailUrl}/>

           </div>
        

        ))}
  </div>

    </div>


  );
}

export default App;