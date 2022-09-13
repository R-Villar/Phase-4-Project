
import Login from "./Login"
import Signup from "./Signup";

function Home({updateUser}) {

    return (
		<div>
			Hello home
			<Signup updateUser={updateUser} />
			<Login updateUser={updateUser} />
		</div>
	);
}

export default Home 
