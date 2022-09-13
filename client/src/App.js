import { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ToyContainer from './components/ToyContainer';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Cart from './components/Cart';

function App() {
const [currentUser, setCurrentUser] = useState("")
console.log(currentUser)
const updateUser = (user) => setCurrentUser(user)
const [toys, setToys] = useState([])
const [errors, setErrors] = useState(false)

//get toys
useEffect(() => {
  fetch("/toys").then(res => {
    console.log(res)
    if(res.ok){
      res.json().then(setToys)
    } else {
      res.json().then((data) => {
        console.log(data)
        setErrors(data.error)
      });
    }
  });
}, [])

  return (
    <div className="App">
    welcome back {currentUser.username}
      <Navbar/>
      <Switch>
        <Route exact path='/'>
         <Home updateUser={updateUser} />
          <ToyContainer toys={toys}/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
