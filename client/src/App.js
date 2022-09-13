import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from "react";

function App() {

  const [currentUser, setCurrentUser] = useState("")
  console.log(currentUser)
  const updateUser = (user) => setCurrentUser(user)

  return (
    <div className="App">

      welcome back {currentUser.username}

      <Navbar />
      <Home updateUser={updateUser} />
    </div>
  )
}

export default App;
