import { useState } from "react";

function Signup({updateUser}) {

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	})

    const {username, email, password} = formData;

     function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            email,
            password
        }

        fetch("/users",
			{
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(user),
			})
            .then(res => res.json())
            .then(newobj => console.log(newobj))

     }


     const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
	}

	return (
		<div>
			
			<form onSubmit={onSubmit}>
			<label>Username</label>
			<input
				type='text'
				name='username'
				value={username}
				onChange={handleChange}
			/>

			<label>Email</label>
			<input
				type='text'
				name='email'
				value={email}
				onChange={handleChange}
			/>

			<label>Password</label>
			<input
				type='password'
				name='password'
				value={password}
				onChange={handleChange}
			/>

			<input type='submit' value='Sign up!' />
		</form>
		</div>
		
		
	);
}

export default Signup