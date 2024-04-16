import React, {useState, useEffect} from 'react';
import {MDBTable, MDBTableHead, MDBTableBody} from "mdb-react-ui-kit";

export const TrainersPage = () => {
    
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v1/trainer/getAll', {
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
            <MDBTable align='middle' bordered>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Trainer Id</th>
                        <th scope='col'>name</th>
                        <th scope='col'>courses</th>
                        <th scope='col'>academy</th>
                      
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {user.map((user) => (<tr key={user.trainer_id}>

                        <td>
                            {user.trainer_id}
                        </td>
                        <td>
                            {user.name}
                        </td>
                        <td>
                            {user.courses}
                        </td>
                        <td>
                            {user.academy}
                        </td>
                     
                    </tr>))}
                </MDBTableBody>
            </MDBTable>
    );
    
}