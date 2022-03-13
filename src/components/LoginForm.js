import React from "react";
import './styles/Login.css';
import  {useState} from "react";

const LoginForm = ({Login,Error}) => {
    const [details, setDetails] = useState({name:"",email: "", password: ""});

    const submitHandler = e => {
        e.preventdefault();

        Login(details);
    }
    return(
      <form onSubmit = {submitHandler}>
        <div className='main-login'> 
    
            <div className="container">
                <form onSubmit = {submitHandler}></form>
                 <div className="frame">
                     <div className="title-login">
                         Log in or Sign up
                        
                         </div>
                         {(error != "") ? (<div className="error">{error}</div>) : ""}
                         <div className="form-group">
                             <label htmlFor="name">Name:</label>
                             <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                             
                             
                        </div>
                        <div className="form-group">
                             <label htmlFor="email">Email:</label>
                             <input type="email" name="email" id="email"onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                             
                             
                        </div>
                        <div className="form-group">
                             <label htmlFor="password">Password:</label>
                             <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>

                             
                             
                        </div>
                        <input type="submit" value="LOGIN"/> 
                             </div>
                         </div>
                         </div>
                         </form>
                        







        
     
    )
}

export default LoginForm;