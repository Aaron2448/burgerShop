import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TraineesPage } from "./pages/TraineesPage";
import { TrainersPage } from "./pages/TrainersPage";
import { HamburgerStall } from "./pages/HamburgerStall";
import { AcademiesPage } from "./pages/AcademiesPage";
import { CreateAcademyPage } from "./pages/CreateAcademyPage";
import { CreateTraineePage } from "./pages/CreateTraineePage";
import { ExamPage } from "./pages/ExamPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

     return (
        
        <div className="App">
        
	        <BrowserRouter>
	        	<Header/>
	            <Routes>
					<Route path="/" element={<LoginPage />}/>
	                <Route path="/login" element={<LoginPage />} />
	                <Route path="/register" element={<RegisterPage />} />  
	                <Route path="/trainees" element={<TraineesPage />} /> 
	                <Route path="/trainers" element={<TrainersPage />} /> 
	                <Route path="/academies" element={<AcademiesPage />} />
	                <Route path="/createAcademy" element={<CreateAcademyPage />} /> 
	                <Route path="/createTrainee" element={<CreateTraineePage />} /> 
	                <Route path="/examResults" element={<ExamPage />} /> 
	                <Route path="/hamburgerStall" element={<HamburgerStall />} /> 
	        	</Routes> 
	        
	        </BrowserRouter>

		</div>

    );

}

export default App;

