import React, {useState, useEffect, ButtonHTMLAttributes} from 'react';
import {MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

export const TraineesPage = () => {
    
    const [user, setUser] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
			
            try {
                const response = await fetch('http://localhost:8080/api/v1/trainee/getAll', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
					window.location.href = '/login';
                    throw new Error('Failed to fetch user profile!!!!!');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);
    
   
    
	const addNumber = async (studentId) => {

        try {
           
			const idNumber = studentId;
			console.log("this is the new number set on trainees page " + idNumber)
            localStorage.setItem("studentId", idNumber);
            console.log(localStorage.getItem("studentId") + " check the local storage")
            window.location.href = '/examResults';
    
        } catch (error) {
           
            console.log("error setting student-id in storage");
            
        }

	}

    return (
             <div>
            <MDBTable align='middle' bordered>
                <MDBTableHead>
                    <tr>
                    	<th scope='col'></th>
                        <th scope='col'>Trainee Id</th>
                        <th scope='col'>name</th>
                        <th scope='col'>stream</th>
                        <th scope='col'>academy</th>
                      
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {user.map((user) => (<tr key={user.trainee_id}>
 
 					   <td>
                       		<MDBBtn onClick={()=> addNumber(user.trainee_id)} type="link" color="dark" >Exam Results</MDBBtn>
                       </td> 
                       
                        <td>
                            {user.trainee_id}
                        </td>
                        
                        <td>
                            <p className='fw-normal mb-1'>{user.name}</p>
                        </td>
                        <td>
                            {user.stream}
                        </td>
                        <td>
                            {user.academy}
                        </td>
                     
                    </tr>))}
                </MDBTableBody>
                
            </MDBTable>
            
            <Grid item>
                 
                  <MDBBtn type="link" color="dark">
                  <Link to="/createTrainee" variant="body2">
                    {"Create Trainee"}
                  </Link>
                  </MDBBtn>
                  
           	</Grid>
           		
        </div>
    );
    
}