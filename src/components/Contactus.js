import React from "react";
import Navbar from "./Navbar";
import './styles/Contactus.css'
import Topbar from "./topbar";




const Contactus= () => {
    return(
       
        <div className="footer">
        <div className="row">
          
            <div className="col ">

                <div className="left">
                    <h1>Departments</h1>
                   <ul>
                       <li id="footer-li">Provincial Irrigation Department Head Office(Western Province)</li>
                       <li id="footer-li">District irrigation Office</li>
                       <li id="footer-li">Divisional irrigation Office</li>
                       <li id="footer-li">Ministry of Agriculture</li>
                       <li id="footer-li">Divisional Secretary Office</li>
                   </ul>
                </div>
                   
                      
            </div>
                
           

            <div className="col">
                <div className="middle">
                    <h1>Useful Links</h1>
                    <ul>
                       <li id="footer-li"><a href="https://www.irrigation.gov.lk/" target="
                       _blank">Irrigation Department</a></li>
                    
                        <li id="footer-li"><a href="http://irrigation.wp.gov.lk/" target="
                       _blank">Western Provincial Irrigation Department</a></li>
                    
                   </ul>
                    
                </div>
            </div>

            <div className="col">
                <div className="right">
                    <h1>Contact details</h1>
                    <ul className="footer-ul">
                    <li id="footer-li">Director,Department of irrigation(WP)</li>
                    <li id="footer-li">25,Maligawa Rd, Rathmalana.</li>
                    <li id="footer-li">Tel: 0112642991</li>
                    <li id="footer-li">Fax: 0112632848</li>
                    <li id="footer-li">Email: info@irrigation.wp.go</li>

                    </ul>
                </div>
           </div>
        </div>
    </div>

                    
    );
}


        

export default Contactus;