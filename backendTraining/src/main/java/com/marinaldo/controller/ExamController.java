package com.marinaldo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marinaldo.dto.ExamDTO;
import com.marinaldo.model.Academies;
import com.marinaldo.model.StudentExams;
import com.marinaldo.repository.ExamRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/exam")
public class ExamController {

    private final ExamRepository examRepository;
   
    public ExamController(ExamRepository examRepository) {
        
    	this.examRepository = examRepository;
    	
    }
    
    // R E A D of CRUD
    @GetMapping("/exams")
    public List<StudentExams> getAllExams_CONT() {

    	return examRepository.getAllExams();
        
    }
    
}
