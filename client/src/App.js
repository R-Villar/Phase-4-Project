import { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Review from './components/Review';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ToyContainer from './components/ToyContainer';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Cart from './components/Cart';
import Signup from './components/Signup';
import ToyPage from './components/Toypage';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // const updateUser = (user) => setCurrentUser(user)
  const [toys, setToys] = useState([])
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState(false)


  //get toys
  useEffect(() => {
    fetch('/toys').then(res => {
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

//get reviews
useEffect(() => {
  fetch('/reviews').then(res => {
    // console.log(res)
    if(res.ok){
      res.json().then(setReviews)
    } else {
      res.json().then((data) => {
        // console.log(data)
        setReviews(data.error)
      });
    }
  });
}, [])

const addReviews = (review) => setReviews(current => [...current,review])

// const updateReview = (updatedReview) => setReviews(current => {
//   return current.map(review => {
//    if(review.id === updatedReview.id){
//      return updatedReview
//    } else {
//      return review
//    }
//   })
// })

// const deleteReview = (id) => setReviews(current => current.filter(r => r.id !== id)) 


  useEffect(() => {
		fetch('/me').then((res) => {
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


  if(errors) return <h1>{errors}</h1>

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
        <Route exact path='/toys/:id'>
					<ToyPage 
          currentUser={currentUser}
          addReviews={addReviews}/>
				</Route>
			</Switch>
		</div>
  );
}

export default App;
