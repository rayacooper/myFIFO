import React from 'react';
import './NavBar.css';
import {Link, withRouter} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='NavBarMain'>
            myFIFO
            <div className='NavBarMenu'>

            </div>
            
            <div className='NavBarLinks'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default withRouter(NavBar);

