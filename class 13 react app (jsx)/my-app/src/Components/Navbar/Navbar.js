import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>


            <nav>

                <div className='left-nav '>

                    <ul>
                        <li>  <Link to="/"> Home </Link>   </li>
                        <li>  <Link to="/Blogs"> Blogs </Link>   </li>
                        <li>  <Link to="/Services"> Services </Link>   </li>
                        <li>  <Link to="/About"> About</Link>   </li>
                        <li>  <Link to="/Contact"> Contact </Link>   </li>
                    </ul>
                </div>



                <div className='right-nav'>
                    <form method="post">
                        <input placeholder="search" className="search-bar" />
                        <button type="submit" >  Submit </button>
                    </form>
                </div>


            </nav>
        </div>
    )
}

export default Navbar