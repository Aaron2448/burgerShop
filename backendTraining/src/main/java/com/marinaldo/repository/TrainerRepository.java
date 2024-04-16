package com.marinaldo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.marinaldo.model.Trainers;

public interface TrainerRepository extends JpaRepository<Trainers, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM trainers")
    List<Trainers> getAllTrainers();
    
    @Query(nativeQuery = true, value = "SELECT * FROM trainers WHERE trainer_id = ?1")
    Trainers findByTrainerId(long id);

}