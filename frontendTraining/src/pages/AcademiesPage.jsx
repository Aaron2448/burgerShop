import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export const AcademiesPage = () => {
    
    const [user, setUser] = useState([]);

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

    return (
             <div className="tables">
            <MDBTable bordered>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Academy ID</th>
          				<th scope='col'>Name</th>
         				<th scope='col'>Address</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {user.map((user) => (<tr key={user.academy_id}>
						<th scope='row'>{user.academy_id}</th>
                      
                        <td>
                            {user.academy_name}
                        </td>
                        <td>
                            {user.address}
                        </td>

                    </tr>))}
                </MDBTableBody>
            </MDBTable>
            
            	 <MDBBtn type="link" color="dark">
                  <Link to="/createAcademy" variant="body2">
                    {"Create Academy"}
                  </Link>
                  </MDBBtn>
        </div>
    );
    
}