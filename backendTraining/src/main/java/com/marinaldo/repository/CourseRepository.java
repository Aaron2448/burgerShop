package com.marinaldo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.marinaldo.model.Courses;

public interface CourseRepository extends JpaRepository<Courses, Long>{


	@Query(nativeQuery = true, value = "SELECT * FROM courses")
	List<Courses> getAllCourses();

}
