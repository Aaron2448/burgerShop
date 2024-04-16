package com.marinaldo.controller;

import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.marinaldo.model.Trainers;
import com.marinaldo.repository.TrainerRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/trainer")
public class TrainerController {

    private final TrainerRepository trainerRepository;
   

    public TrainerController(TrainerRepository trainerRepository) {
        
    	this.trainerRepository = trainerRepository;
    	
    }

    // R E A D of CRUD
    @GetMapping("/getAll")
    public List<Trainers> getAllTrainers_CONT() {

    	return trainerRepository.getAllTrainers();
        
    }
 
    // C R E A T E of CRUD
    @PostMapping("/create")
    public Trainers createTrainer(@RequestBody Trainers trainer) {
        
    	System.out.println(trainer.toString());
        trainerRepository.save(trainer);
        
        return trainer;
        
    }


    
}
