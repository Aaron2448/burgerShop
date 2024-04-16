package com.marinaldo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.marinaldo.model.Academies;

public interface AcademyRepository extends JpaRepository<Academies, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM academies")
    List<Academies> getAllAcademies();

    @Query(nativeQuery = true, value = "SELECT * FROM academies WHERE academy_id = ?1")
    Academies findByAcademyId(long id);

}
