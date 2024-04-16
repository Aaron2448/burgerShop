import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import axios from 'axios';
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import {FormHelperText} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from "@mui/material/Typography";

export const CreateAcademyPage = () => {

	const [academy_name, setAcademy_name] = useState('');
	const [address, setAddress] = useState('');
	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState('');
    const [academy_nameError, setAcademy_nameError] = useState('');
    const [addressError, setAddressError] = useState('');

	const header = {
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
	
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		const academy={academy_name, address}
		console.log(academy);
		setError(null);
	
        
           
           if (academy_name.length < 3 | address.length < 3) {
			   
			   setSuccessMessage('Error adding academy!');
			   
		   } else {
         
		         try {
		           	
		            const response = await axios.post('http://localhost:8080/api/v1/academy/create', academy, { headers: header } );
					console.log(response.data);
		            setSuccessMessage('Academy added successfully!');
		
				} catch (error) {
			        
			        const response = error.response.data;
			        console.log(response);
			        setSuccessMessage('Error adding academy!');
			        
				}
 
			}
			
	}
	
	   const academyRequirements = [
    
        {
            id: 'length',
            condition: /.{3,}/,
            message: 'Entry should be at least 3 characters long.',
        }
        
    ];

	  const checkAcademy_nameRequirements = (academy_name) => {
        const messages = academyRequirements
            .filter((requirement) => !requirement.condition.test(academy_name))
            .map((requirement) => requirement.message);

        return messages;
    };
    
      const checkAddressRequirements = (address) => {
        const messages = academyRequirements
            .filter((requirement) => !requirement.condition.test(address))
            .map((requirement) => requirement.message);

        return messages;
    };
    
    const handleAcademyBlur = (event) => {
        const academyValue = event.target.value;
        const academyErrors = checkAcademy_nameRequirements(academyValue);

        setAcademy_nameError(
            academyErrors.filter((message) => !message.endsWith('met.'))
        );
    };
    
    const handleAddressBlur = (event) => {
        const addressValue = event.target.value;
        const academyErrors = checkAddressRequirements(addressValue);

        setAddressError(
            academyErrors.filter((message) => !message.endsWith('met.'))
        );
    };

	return (
		
	  <Grid container component="main" className="App" sx={{ height: "100vh" }}>
	  
            <CssBaseline />
            <Grid className="auth-form-container" item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <AddCircleIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Box component="div" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
				   				
				   				<Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="academy_name"
                                        label="Academy Name"
                                        type="academy_name"
                                        id="academy_name"
                                        autoComplete="new-academy_name"
                                        value={academy_name}
                                        onChange={(event) => setAcademy_name(event.target.value)}
                                        onBlur={handleAcademyBlur}
                                    />
                                    {academy_nameError.length > 0 && (
                                        <FormHelperText error>
                                            {academy_nameError.map((message, index) => (
                                                <div key={index}>
                                                    {message.endsWith("met.") && (
                                                        <span style={{ color: "green" }}>✓</span>
                                                    )}
                                                    {!message.endsWith("met.") && (
                                                        <span style={{ color: "red" }}>✗</span>
                                                    )}
                                                    {message}
                                                </div>
                                            ))}
                                        </FormHelperText>
                                    )}
                                </Grid>	
				
				
				   				<Grid item xs={13}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="address"
                                        label="Address"
                                        type="address"
                                        id="address"
                                        autoComplete="new-address"
                                        value={address}
                                        onChange={(event) => setAddress(event.target.value)}
                                        onBlur={handleAddressBlur}
                                    />
                                    {addressError.length > 0 && (
                                        <FormHelperText error>
                                            {addressError.map((message, index) => (
                                                <div key={index}>
                                                    {message.endsWith("met.") && (
                                                        <span style={{ color: "green" }}>✓</span>
                                                    )}
                                                    {!message.endsWith("met.") && (
                                                        <span style={{ color: "red" }}>✗</span>
                                                    )}
                                                    {message}
                                                </div>
                                            ))}
                                        </FormHelperText>
                                    )}
                                </Grid>	
				
				 			 </Grid>
				  
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Create Academy
                            </Button>        
                  
                            {successMessage == "Academy added successfully!" && (
                                <Alert severity="success" sx={{ mb: 2 }}>
                                    {successMessage}
                                </Alert>
                            )}
                            
                             {successMessage == "Error adding academy!" && (
                                <Alert severity="error" sx={{ mb: 2 }}>
                                    {successMessage}
                                </Alert>
                            )}

                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to="/academies" variant="body2">
                                        Go back to academies
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </Box>
                
                
            </Grid>
    
        </Grid>
    );
};