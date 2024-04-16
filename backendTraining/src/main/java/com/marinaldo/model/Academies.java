package com.marinaldo.model;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@ToString
@Entity
@Table(name = "academies")
public class Academies {

    public Academies() {
		// TODO Auto-generated constructor stub
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long academy_id;
    
    @Column(nullable = false)
    private String academy_name;
    
    @Column
    private String address;
   
}
