import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';




import React from 'react';
import './styles/topbar.css';


const Topbar = () => {
    return (
        <div className='sum1'>
            <div className="topbar">
               <nav className='sections'>
                    <ul className='ul'>
                       <li id="LOGO">
                            
                            </li>
                    
                         <li id="name">
                             Irrigation Department <br></br>
                             Sri Lanka <br></br>
                             Western Province<br></br>
                             </li>
                    
              
                          <li id="email">
                             <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>                   
                             dieoffice@gmail.com
                             </li>

                          <li id="phone">
                          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>   
                              0112456963
                              </li>
                           
                          <li id="fb">
                            
                          
                              </li>
                                
            </ul>
      </nav> 
      </div>

</div>    
    );
}

export default Topbar;

