import { useState } from "react"
import {useHistory} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";


function Login({setCurrentUser}) {

	const [errors, setErrors] = useState([]);
	const history = useHistory();
	const [formData, setFormData] = useState({
		username: "",
		password: ""
	});

	const handleCancel = () => {
		history.push("/home")
	}

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
	console.log(formData)

	return (
		<Box
			container
			onSubmit={onSubmit}
			spacing={5}
			component='form'
			noValidate
			autoComplete
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				"& > :not(style)": {
					m: 5,
					p: 4,
					width: 300,
					height: 300,
				},
			}}
		>
			<Paper sx={{p: 2, m: 4}}>
				<Stack sx={{m: 2}} direction='column' justifyContent='center'>
					<TextField
						id='margin-normal'
						margin='normal'
						required
						type='text'
						name='username'
						label='username'
						value={formData.username}
						onChange={handleChange}
					/>
					<TextField
						id='margin-normal'
						margin='normal'
						required
						type='password'
						name='password'
						label='password'
						value={formData.password}
						onChange={handleChange}
					/>
					<Stack
						sx={{m: 2}}
						direction='row'
						justifyContent='center'
						spacing={2}
					>
						<Button
							onClick={handleCancel}
							color='secondary'
							size='small'
							variant='contained'
						>
							Cancel
						</Button>
						<Button
							size='small'
							type='submit'
							value='Log in!'
							variant='contained'
						>
							Submit
						</Button>
					</Stack>
				</Stack>
				{errors ? <div>{errors}</div> : null}
			</Paper>
		</Box>
	);
}

export default Login;
