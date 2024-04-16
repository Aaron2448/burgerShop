package com.marinaldo.controller;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.marinaldo.dto.TraineeDTO;
import com.marinaldo.model.StudentExams;
import com.marinaldo.model.Trainees;
import com.marinaldo.repository.TraineeRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/trainee")
public class TraineeController {

    private final TraineeRepository traineeRepository;
   

    public TraineeController(TraineeRepository traineeRepository) {
        
    	this.traineeRepository = traineeRepository;
    	
    }

    // R E A D of CRUD
    @GetMapping("/getAll")
    public List<Trainees> getAllTrainees_CONT() {

    	return traineeRepository.getAllTrainees();
        
    }
 
    // C R E A T E of CRUD
    @PostMapping("/create")
    public String createTrainee(@RequestBody TraineeDTO traineeDTO) {
        
    	System.out.println(traineeDTO.toString());
    	Trainees t = new Trainees();
    	t.setName(traineeDTO.getFullName());
    	t.setStream(traineeDTO.getStream());
    	t.setAcademy(traineeDTO.getAcademy());
        traineeRepository.save(t);
        
        return "Successful add";
        
    }

    
}
