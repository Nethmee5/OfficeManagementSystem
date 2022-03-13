import React from 'react';
import  { Link } from 'react-router-dom';
import './styles/Navbar.css'




const Navbar = () => {
    return (
        
       <div> 
        
      
            <div className='sum'>
                 <div className="navbar">
                    
                     
                 </div>
                 
						
							
        
        <nav className='item'>
            <ul className='ul'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Aboutus'>About us</Link>
                </li>
                <li>
                    <Link to='/Contactus'>Contact us</Link>
                </li>
                <li>
                    <Link to='/Login'>Login</Link>
                </li>
            </ul>
      </nav>
     </div>
   
     <p class="white-text1">WELCOME TO IRRIGATION DEPARTMENT</p>
	 <p class="white-text2"> OFFICE MANAGEMENT SYSTEM</p>
    </div>
     
    );
    

       
}

export default Navbar;