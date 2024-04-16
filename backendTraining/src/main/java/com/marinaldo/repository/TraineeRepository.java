package com.marinaldo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.marinaldo.model.StudentExams;
import com.marinaldo.model.Trainees;

public interface TraineeRepository extends JpaRepository<Trainees, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM trainees")
    List<Trainees> getAllTrainees();
    
    @Query(nativeQuery = true, value = "SELECT * FROM trainees WHERE trainee_id = ?1")
    Trainees findByTraineeId(long id);
    
}
