package com.marinaldo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.marinaldo.model.Order;

public interface OrdersRepository extends JpaRepository<Order, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM orders WHERE day = :day AND month = :month AND year = :year")
    List<Order> findOrdersByDate(@Param("day") String day, @Param("month") String month, @Param("year") String year);

}
