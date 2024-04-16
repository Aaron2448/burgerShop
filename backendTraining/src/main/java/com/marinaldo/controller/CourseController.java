package com.marinaldo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.marinaldo.model.Courses;
import com.marinaldo.repository.CourseRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/course")
public class CourseController {

    private final CourseRepository courseRepository;
   

    public CourseController(CourseRepository courseRepository) {
        
    	this.courseRepository = courseRepository;
    	
    }

    // R E A D of CRUD
    @GetMapping("/getAll")
    public List<Courses> getAllCourses_CONT() {

    	return courseRepository.getAllCourses();
        
    }
  
    // C R E A T E of CRUD
    @PostMapping("/create")
    public String createAcademy(@RequestBody Courses course) {
        
    	System.out.println(course.toString());
        courseRepository.save(course);
        
        return "Successful add";
        
    }
    
}
