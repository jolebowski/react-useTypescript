import React, {useState} from 'react';
import './App.css';

type adress = {
  city: string,
  number: number,
  street: string
}

type User = {
  name:string,
  age: number,
  adress: adress
}

function App() {
  const [user, setUser] = useState<User | null>(null)
  
  const fetchUser = () => 
    setUser({
      name: "Jordan",
      age: 28, 
      adress: {
      city:"paris",
      number: 89,
      street:"jean boulevard"
      },
    })
  
  return (
    <div className="App">
      <header className="App-header">
         <h1>Header</h1>
         <button onClick={fetchUser}>fetch user on click</button>    
         {user && <p>{`Welcome ${user.name}`}</p>}      
      </header>
    </div>
  );
}

export default App;
