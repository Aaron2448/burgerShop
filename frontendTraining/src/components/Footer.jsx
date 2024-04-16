import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
		
        <MDBFooter class="fixed-bottom text-white bg-dark" color='white' bgColor='dark'>
            <MDBContainer className='p-4'>

                <section className='App-footer'>
                    <MDBRow>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                       

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='trainers' className='text-white'>
                                        Trainers
                                    </a>
                                </li>
                                <li>
                                    <a href='trainees' className='text-white'>
                                        Trainees
                                    </a>
                                </li>
                                <li>
                                    <a href='academies' className='text-white'>
                                        Academies
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                       

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='login' className='text-white'>
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a href='register' className='text-white'>
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                    
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' href='https://ama.com/'>
                    AMA
                </a>
            </div>

        </MDBFooter>
     
    );
}