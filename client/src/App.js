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
import NewToy from './components/NewToy';

function App() {
	const [currentUser, setCurrentUser] = useState('')
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [selectedToy, setSelectedToy] = useState([]);
	const [toys, setToys] = useState([])
	const [reviews, setReviews] = useState([])
	const [errors, setErrors] = useState(false)
	const [ cartItems, setCartItems ] = useState([])

	const newToyInCart = newToyObj => {
		setSelectedToy( toyObj => [...toyObj, newToyObj ])
	  }

	console.log(reviews)

	useEffect(() => {
	fetch('/toys').then(res => {
		if(res.ok){
		res.json().then(setToys)
		} else {
		res.json().then((data) => {
			setErrors(data.error)
		});
		}
	});
	}, [])

	// function handleDeleteClick(deletedReview){
	//   const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id)
	//   setReviews(updatedReviews)
	// }


	const deleteReview = (id) => setReviews(current => current.filter(r => r.id !== id)) 


	const addReviews = (review) => setReviews(current => [...current,review])

	// const updateReview = (updatedReview) => setReviews(current => {
	// return current.map(review => {
	// if(review.id === updatedReview.id){
	// 	return updatedReview
	// } else {
	// 	return review
	// }
	// })
	// })





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
			<Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
			<Switch>
				<Route exact path='/home'>
					<Home currentUser={currentUser} />
					<ToyContainer 
					toys={toys} 
					setSelectedToy={setSelectedToy} 
					setCartItems={setCartItems} 
					newToyInCart={newToyInCart} 
					currentUser={currentUser}
					/>
				</Route>
				<Route exact path='/login'>
					<Login setCurrentUser={setCurrentUser} />
				</Route>
				<Route exact path='/signup'>
					<Signup setCurrentUser={setCurrentUser} />
				</Route>
				<Route exact path='/cart'>
					<Cart selectedToy={selectedToy} currentUser={currentUser}/>
				</Route>
				<Route exact path='/toys/:id'>
					<ToyPage
						setReviews={setReviews}
						currentUser={currentUser}
						selectedToy={selectedToy}
						addReviews={addReviews}
						// handleDeleteClick={handleDeleteClick}
						deleteReview={deleteReview}
					/>
				</Route>
				<Route exact path='/NewToy'>
					<NewToy />
				</Route>
			</Switch>
		</div>
  );
}

export default App;