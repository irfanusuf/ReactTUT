import React, { useContext } from 'react';
import { myContext } from '../App'; 

const ListItems = () => {

const home = useContext(myContext);
  return (
    <>
      <li> <a href='./index'> {home} </a></li>
      <li> <a href='./blogs'> Blogs </a></li>
      <li> <a href='./contact'> Contact</a></li>
      <li> <a href='./services'> Services </a></li>



<h1> {home} </h1>
<p>   welocme to {home} </p>

    </>



  );
}

export default ListItems;
