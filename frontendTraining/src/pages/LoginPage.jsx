import * as React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

export const LoginPage = () => {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleClick = async (e) => {
		
		e.preventDefault();
		const user={email, password}
		console.log(user);
		setError(null);
	
	        try {
	           
	            const response = await fetch('http://localhost:8080/api/v1/user/authenticate', {
	                
	                method: 'POST',
	                headers: {
	                    'Content-Type': 'application/json',
	                    "Access-Control-Allow-Headers": "*",
	        			"Access-Control-Allow-Origin": "*",
	        			"Access-Control-Allow-Methods": "*" 
	                },
	                body: JSON.stringify(user)
	                
	            });
	
	            if (response.ok) {
					
	                const accessToken = await response.text();
	                localStorage.setItem("token", accessToken);
	                window.location.href = '/trainees';
	                
	            } else {
	                const { message } = response;
	                setError(message);
	            }
	        
	        } catch (error) {
	            console.error(error);
	            setError('An error occurred while logging in. Please try again later.');
	        }

		
		
	}

	return (
		<div className="auth-form-container">
		<h2>Login</h2>
			<form className="login-form">	
				
				<label htmlFor="email">Email</label>
				<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />	
				
				<label htmlFor="password">Password</label>
				<input value={password} onChange = {(e)=>setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
				
				<button onClick={handleClick} type="submit">Log in</button>
			</form>
			<Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
            </Grid>
		</div>
	)
}