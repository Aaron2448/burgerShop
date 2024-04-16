import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import axios from 'axios';
import Alert from "@mui/material/Alert";

export const RegisterPage = () => {
	
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState('');
	
	const handleClick = async (e) => {
		e.preventDefault();
		const user={name, email, password}
		console.log(user);
		setError(null);
	
        try {
           
            const response = await axios.post('http://localhost:8080/api/v1/user/register', user);
			console.log(response.data);
            setSuccessMessage('User registered successfully!');

		} catch (error) {
	        
	        const response = error.response.data;
	        console.log(response);
	        
		}

        
}
	

	return (
		<div className="auth-form-container">
		<h2>Register</h2>
			<form className="login-form">	
				
				<label htmlFor="name">Full Name</label>
				<input value={name} onChange={(e)=>setName(e.target.value)} type="name" placeholder="FullName" id="name" name="name" />	
				
				
				<label htmlFor="email">Email</label>
				<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />	
				
				<label htmlFor="password">Password</label>
				<input value={password} onChange = {(e)=>setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
				
				<button onClick={handleClick} type="submit">Log in</button>
			</form>
			
			 {successMessage && (
                                <Alert severity="success" sx={{ mb: 2 }}>
                                    {successMessage}
                                </Alert>
                            )}
			
			<Grid item>
                  <Link to="/login" variant="body2">
                    {"Already have an account? Log in"}
                  </Link>
            </Grid>
		</div>
	)
}
