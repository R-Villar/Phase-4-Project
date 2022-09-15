
function Home({currentUser}) {

	return <div>
		{/* displays username if the user is logged in */}
		{currentUser? <p>Welcome back {currentUser.username}</p> : null }
		</div>;
}

// Hello
export default Home 
