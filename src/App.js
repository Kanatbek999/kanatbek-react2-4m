import { useState } from 'react';
import './App.css'
function App() {
      const [name, SetName] = useState(' ')
      const [Delete, SetDelete] = useState('Sign up')

      const reg  = () => {
        SetName(name + 'Success! Thank you for registering')
        SetDelete(name + ' ')
        
      }
    
  return (
    
    <div className="container">
      <div className="register">
     <h1>{Delete}</h1>
     <h1 className='name'>{name}</h1>
     <div className='inputs'>
     <input className="input" placeholder='First Name'></input>
     <input className="input" placeholder='Last Name'></input>
     <input className="input" type="email" placeholder='Email'></input>

     </div>
     
     <button onClick={reg}>Register</button>

      </div>
    
    </div>
  );
}

export default App;
