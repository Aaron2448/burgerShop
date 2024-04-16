import { useState, useEffect } from "react";
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

export const CreateTraineePage = () => {
	
		const [academies, setAcademies] = useState([]);
		const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v1/academy/getAll', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setAcademies(data);
                } else {
					window.location.href = '/login';
                    throw new Error('Failed to fetch academies!');
                }
            } catch (error) {
                console.error(error);
            }
            
        };

        fetchUser();
    }, []);
	
	
	
	useEffect(() => {
        const fetchUser = async () => {
	     try {
                const res = await fetch('http://localhost:8080/api/v1/course/getAll', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (res.ok) {
                    const data2 = await res.json();
                    setCourses(data2);
                } else {
					window.location.href = '/login';
                    throw new Error('Failed to fetch academies!');
                }
            } catch (error) {
                console.error(error);
            }
            
          };

        fetchUser();
    }, []);
	
	
	const [stream, setStream] = useState('');
	const [fullName, setFullName] = useState('');
	const [academy, setAcademy] = useState('');
	const [error, setError] = useState(null);
	const [successMessage, setSuccessMessage] = useState('');
    const [streamError, setStreamError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [academyError, setAcademyError] = useState('');
	
	const header = {
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const trainee={stream, fullName, academy}
		console.log(trainee);
		setError(null);

           if (stream.length < 3 | fullName.length < 3 | academy.length < 3) {
			   
			   setSuccessMessage('Error adding academy!');
			   
		   } else {
         
		         try {
		           	
		            const response = await axios.post('http://localhost:8080/api/v1/trainee/create', trainee, { headers: header } );
					console.log(response.data);
		            setSuccessMessage('Trainee added successfully!');
		
				} catch (error) {
			        
			        const response = error.response.data;
			        console.log(response);
			        setSuccessMessage('Error adding Trainee!');
			        
				}
 
			}
			
	}
	
	   const traineeRequirements = [
    
        {
            id: 'length',
            condition: /.{3,}/,
            message: 'Invalid Entry',
        }
        
    ];

	  const checkStreamRequirements = (stream) => {
        const messages = traineeRequirements
            .filter((requirement) => !requirement.condition.test(stream))
            .map((requirement) => requirement.message);

        return messages;
    };
    
      const checkFullNameRequirements = (fullName) => {
        const messages = traineeRequirements
            .filter((requirement) => !requirement.condition.test(fullName))
            .map((requirement) => requirement.message);

        return messages;
    };
    
       const checkAcademyRequirements = (academy) => {
        const messages = traineeRequirements
            .filter((requirement) => !requirement.condition.test(academy))
            .map((requirement) => requirement.message);

        return messages;
    };
    
    const handleStreamBlur = (event) => {
        const streamValue = event.target.value;
        const streamErrors = checkStreamRequirements(streamValue);

        setStreamError(
            streamErrors.filter((message) => !message.endsWith('met.'))
        );
    };
    
    const handleFullNameBlur = (event) => {
        const fullNameValue = event.target.value;
        const fullNameErrors = checkFullNameRequirements(fullNameValue);

        setFullNameError(
            fullNameErrors.filter((message) => !message.endsWith('met.'))
        );
    };
    
      const handleAcademyBlur = (event) => {
        const academyValue = event.target.value;
        const academyErrors = checkAcademyRequirements(academyValue);

        setAcademyError(
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
				   				
				   				

				   				<Grid item xs={13}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="fullName"
                                        label="fullName"
                                        type="fullName"
                                        id="fullName"
                                        autoComplete="new-address"
                                        value={fullName}
                                        onChange={(event) => setFullName(event.target.value)}
                                        onBlur={handleFullNameBlur}
                                    />
                                    {fullNameError.length > 0 && (
                                        <FormHelperText error>
                                            {fullNameError.map((message, index) => (
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
                                  <div className="mb-3">
                                    <label style={{ marginRight: '3rem' }}>
                                        Stream
                                    </label>
                                    
                                    <select
                                        id="stream"
                                        name="stream"
                                        value={stream}
                                        onChange={(event) => setStream(event.target.value)}
                                        onBlur={handleStreamBlur}
                                        required
                                    >
                                         {courses.map((option) => {
											return (
									            <option key={option.course_name} value={option.course_name}>
									              {option.course_name}
									            </option>
									          );
									        })}
                                    </select>
                                </div>
                                    {streamError.length > 0 && (
                                        <FormHelperText error>
                                            {streamError.map((message, index) => (
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
                                  <div className="mb-3">
                                    <label style={{ marginRight: '3rem' }}>
                                        Academy
                                    </label>
                                    
                                    <select
                                        id="academy"
                                        name="academy"
                                        value={academy}
                                        onChange={(event) => setAcademy(event.target.value)}
                                        onBlur={handleAcademyBlur}
                                        required
                                    >
                                         {academies.map((option) => {
											return (
									            <option key={option.academy_name} value={option.academy_name}>
									              {option.academy_name}
									            </option>
									          );
									        })}
                                    </select>
                                </div>
                                    {academyError.length > 0 && (
                                        <FormHelperText error>
                                            {academyError.map((message, index) => (
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
                                Create Trainee
                            </Button>        
                  
                            {successMessage == "Trainee added successfully!" && (
                                <Alert severity="success" sx={{ mb: 2 }}>
                                    {successMessage}
                                </Alert>
                            )}
                            
                             {successMessage == "Error adding Trainee!" && (
                                <Alert severity="error" sx={{ mb: 2 }}>
                                    {successMessage}
                                </Alert>
                            )}

                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to="/trainees" variant="body2">
                                        Go back to Trainees
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