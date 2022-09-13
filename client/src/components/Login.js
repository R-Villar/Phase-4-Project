import { useState } from "react"


function Login({setCurrentUser}) {
	const [errors, setErrors] = useState([]);

	const [formData, setFormData] = useState({
		username: "",
		email: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	// const {username, password} = formData;

	function onSubmit(e) {
		e.preventDefault();
		// const user = {
		// 	username,
		// 	password,
		// };
		// console.log(user);

		// login user
		fetch("/login", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(formData),
		}).then((response) => {
			if (response.ok) {
				response.json().then((user) => {
					setCurrentUser(user);
					// use history to push the user to other page
				});
			} else {
				// errors if login is incorrect
				response.json().then((json) => setErrors(json.errors));
			}
		});
	}

	// const handleChange = (e) => {
	// 	const {name, value} = e.target
	// 	setFormData({...formData, [name]: value})
	// }


	return (
		<>
			<form onSubmit={onSubmit}>
				<label>Username</label>
				<input
					type='text'
					name='username'
					value={formData.username}
					onChange={handleChange}
				/>

				<label>Password</label>
				<input
					type='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
				/>

				<input type='submit' value='Log in!' />
			</form>
			{errors ? <div>{errors}</div> : null}
		</>
	);
}

export default Login;
