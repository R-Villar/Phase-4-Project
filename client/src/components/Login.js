import { useState } from "react"
import {useHistory} from "react-router-dom";

function Login({setCurrentUser}) {
	const [errors, setErrors] = useState([]);
	const history = useHistory();
	const [formData, setFormData] = useState({
		username: "",
		email: ""
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	function onSubmit(e) {
		e.preventDefault();

		fetch("/login", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(formData),
		}).then((response) => {
			if (response.ok) {
				response.json().then((user) => {
					setCurrentUser(user);
					history.push('/home');
				});
			} else {
				// errors if login is incorrect
				response.json().then((json) => setErrors(json.errors));
			}
		});
	}

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
