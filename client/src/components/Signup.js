import { useState } from "react";
import {useHistory} from "react-router-dom";

function Signup({setCurrentUser}) {
	const [errors, setErrors] = useState([]);
	const history = useHistory();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: ""
	});

	function onSubmit(e) {
		e.preventDefault();

		fetch("/users", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(formData),
		})
		.then(response => {
			if(response.ok){
				response.json().then(user => {
					setCurrentUser(user)
					history.push('/home');
				})
			}else {
				response.json().then((json) => setErrors(json.errors));
			}
		})
	}

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>Username</label>
				<input
					type='text'
					name='username'
					value={formData.username}
					onChange={handleChange}
				/>

				<label>Email</label>
				<input
					type='text'
					name='email'
					value={formData.email}
					onChange={handleChange}
				/>

				<label>Password</label>
				<input
					type='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
				/>

				<input type='submit' value='Sign up!' />
			</form>
			{errors ? <div>{errors}</div> : null}
		</div>
	);
}

export default Signup