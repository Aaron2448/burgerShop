import React, {useState, useEffect} from 'react';
import {MDBTable, MDBTableHead, MDBTableBody} from "mdb-react-ui-kit";

export const ExamPage = () => {
    
    const [student, setStudent] = useState([]);

    useEffect(() => {
        
        const fetchUser = async () => {

            try {
                const response = await fetch('http://localhost:8080/api/v1/exam/exams', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (response.ok) {
 
                    const data = await response.json();    
             		setStudent(data.splice((Number(localStorage.getItem("studentId"))) - 1, 1))
					localStorage.removeItem('studentId');
                    
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
              <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Trainer Id</th>
                        <th scope='col'>results</th>
                  
                      
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {student.map((st) => (<tr key={st.student_id}>

                        <td>
                            {st.student_id}
                        </td>
                        <td>
                            {st.results}
                        </td>
                        
                        </tr>

                    )
                    
                    )}
                </MDBTableBody>
            </MDBTable>
    );
    
}