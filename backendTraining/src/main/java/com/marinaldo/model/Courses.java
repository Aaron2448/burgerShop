package com.marinaldo.model;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@ToString
@Entity
@Table(name = "courses")
public class Courses {

    public Courses() {
		// TODO Auto-generated constructor stub
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long course_id;
    
    @Column(nullable = false)
    private String course_name;
   
}