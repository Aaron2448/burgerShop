package com.marinaldo.model;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@ToString
@Entity
@Table(name = "trainers")
public class Trainers {

    public Trainers() {
		// TODO Auto-generated constructor stub
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long trainer_id;
    
    @Column(nullable = false)
    private String name;
    
    @Column
    private String academy;
    
    @Column 
    private String courses;
   
}
