package com.marinaldo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.marinaldo.model.StudentExams;

public interface ExamRepository extends JpaRepository<StudentExams, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM exam")
	List<StudentExams> getAllExams();

}
