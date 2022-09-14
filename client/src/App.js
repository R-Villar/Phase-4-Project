import { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ToyContainer from './components/ToyContainer';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Cart from './components/Cart';
import Signup from './components/Signup';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // const updateUser = (user) => setCurrentUser(user)
  const [toys, setToys] = useState([])
  const [errors, setErrors] = useState(false)

  //get toys
  useEffect(() => {
    fetch("/toys").then(res => {
      // console.log(res)
      if(res.ok){
        res.json().then(setToys)
      } else {
        res.json().then((data) => {
          // console.log(data)
          setErrors(data.error)
        });
      }
    });
  }, [])

  useEffect(() => {
		fetch("/me").then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					setCurrentUser(user);
					setIsAuthenticated(true);
				});
			}
		});
  }, []);

  if (!isAuthenticated) {
		return <div></div>;
  }
  console.log(currentUser);

  return (
		<div className='App'>
			{/* welcome back {currentUser.username} */}
			<Navbar />
			<Switch>
				<Route exact path='/home'>
					<Home currentUser={currentUser} />
					<ToyContainer toys={toys} />
				</Route>
				<Route exact path='/login'>
					<Login setCurrentUser={setCurrentUser} />
				</Route>
				<Route exact path='/signup'>
					<Signup setCurrentUser={setCurrentUser} />
				</Route>
				<Route exact path='/cart'>
					<Cart />
				</Route>
			</Switch>
		</div>
  );
}

export default App;
