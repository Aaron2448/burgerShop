package com.marinaldo.controller;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marinaldo.model.Academies;
import com.marinaldo.repository.AcademyRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/academy")
public class AcademyController {

    private final AcademyRepository academyRepository;
   

    public AcademyController(AcademyRepository academyRepository) {
        
    	this.academyRepository = academyRepository;
    	
    }

    // R E A D of CRUD
    @GetMapping("/getAll")
    public List<Academies> getAllAcademies_CONT() {

    	return academyRepository.getAllAcademies();
        
    }
  
    // C R E A T E of CRUD
    @PostMapping("/create")
    public String createAcademy(@RequestBody Academies academy) {
        
    	System.out.println(academy.toString());
        academyRepository.save(academy);
        
        return "Successful add";
        
    }
    
}
