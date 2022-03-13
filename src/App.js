import './App.css';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

function App() {
  const adminUser = {
    email: "ädmin@adminUser.com";
    password: "admin"

  }
  const [user,setUser] = useState({name: "", email:""});
  const [error,setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password)
          console.log("Logged in");
          setUser({
            name: details.name,
            email: details.email,
          });
  } else {
    console.log("Details does not match!");
    setError("Details do not match!");
  }

  }
  const Logout = () =>{
    console.log("Logout");
    setUser({name: "", email: ""});
  }
  return (
    <div className="App">
      {(user.email != "")?( 
        <div className='Welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
         <LoginForm Login={Login} error={error}/>
      )
}
    
   


      



      
    
      
    
    </div>
  );
}

export default App;
