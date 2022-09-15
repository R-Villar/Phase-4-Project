
function Home({currentUser}) {

	return <div className="home">
		{/* displays username if the user is logged in */}
		{currentUser? <h1>Welcome back, {currentUser.username}</h1> : null }
		</div>;
}

// Hello
export default Home 
