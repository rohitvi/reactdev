import logo from './logo.svg';
import './App.css';
import React,{useState} from  'react';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Submission=(event)=>{
    event.preventDefault();
    const data={
      'username':username,
      'password':password,
    }
    
  }
  const changerU=(event)=>{
    setUsername(event.target.value);
  };
  const changerP=(e)=>setPassword(e.target.value);
  const end=()=>{
    setUsername("second");
  }
   return (
    <>
    <form onSubmit={Submission}>
      <label>Username</label>
      <input type="text" onChange={changerU} value={username}/>
      <h1>{username}</h1>
      <label>Password</label>
      <input type="password" onChange={changerP} value={password}/>
      <input type="submit" value="submit"/>
      
    </form>
    <button onClick={end}>End</button>
    </>
  );
}

export default App;
