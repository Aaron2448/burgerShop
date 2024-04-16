package com.marinaldo.model;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@ToString
@Entity
@Table(name = "exam")
public class StudentExams {

    public StudentExams() {
		// TODO Auto-generated constructor stub
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long student_id;
    
    private String results;
    
  
   
}
